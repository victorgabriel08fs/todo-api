import { prisma } from "../prisma/client";

class WorkspaceUseCases {
    async index(userId) {
        const workspaces = await prisma.workspace.findMany({
            where: {
                userId
            },
            include: {
                tasks: true
            }
        });

        return workspaces;
    }

    async store(data) {
        const workspace = await prisma.workspace.create({
            data: data
        });

        if (workspace != null) {
            return workspace;
        } else {
            return false;
        }
    }

    async delete(id) {
        const deleted = await prisma.workspace.delete({
            where: {
                id
            }
        });

        return deleted;
    }
}

export const workspaceUseCases = new WorkspaceUseCases();