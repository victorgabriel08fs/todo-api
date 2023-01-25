import { prisma } from "../prisma/client";
import md5 from 'js-md5';

class UserUseCases {
    async index() {
        const users = await prisma.user.findMany({
            select: {
                id: true, name: true, email: true, workspaces: true, isAdmin: true, avatar:true
            }

        });

        return users;
    }

    async show(id) {
        const user = await prisma.user.findUnique({
            where: {
                id
            },
            include: {
                workspaces: true
            }
        });

        if (user != null) {
            return user;
        } else {
            return false;
        }
    }

    async store(data) {
        const cipher = md5(data.password);
        data.password = cipher;
        const user = await prisma.user.create({
            data: data
        });

        if (user != null) {
            return user;
        } else {
            return false;
        }

    }

    async destroy(id) {
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        });

        if (user != null) {
            const deleted = await prisma.user.delete({
                where: {
                    id
                }
            });

            return deleted;
        } else {
            return false;
        }
    }

}

export const userUseCases = new UserUseCases();