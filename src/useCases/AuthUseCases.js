import { prisma } from '../prisma/client';
import md5 from 'js-md5';

class AuthUseCases {
    async login(email, password) {
        const cipher = md5(password);

        const user = await prisma.user.findMany({
            where: {
                email: email,
                password: cipher
            },
            select: {

                id: true,
                email: true,
                name: true,
                created_at: true,
                isAdmin: true,
                avatar:true
            }
        });

        if (user[0] != null) {
            return user[0];
        } else {
            return false;
        }
    }
}

export const authUseCases = new AuthUseCases();