import { prisma } from "../prisma/client";

class TaskUseCases {
    async index(userId) {
        const tasks = await prisma.task.findMany({
            where: {
                userId
            },
            orderBy: {
                done: 'asc'
            },
            include: {
                user: true
            }
        });

        return tasks;
    }

    async store(data) {
        const task = await prisma.task.create({
            data: data
        });

        if (task != null) {
            return task;
        } else {
            return false;
        }
    }

    async done(id, done) {
        const task = await prisma.task.update({
            where: {
                id
            },
            data: {
                done
            }
        });

        if (task != null) {
            return task;
        } else {
            return false;
        }
    }

    async delete(id) {
        const deleted = await prisma.task.delete({
            where: {
                id
            }
        });

        return deleted;
    }
}

export const taskUseCases = new TaskUseCases();