import { prisma } from "../prisma/client";

class HandleServices {
    async exec() {
        handleServices.discartWorkspaces();
    }

    async discartWorkspaces() {
        var { count } = await prisma.workspace.deleteMany({
            where: {
                userId: null
            }
        });
        const deletedWorkspaces = count;

        var { count } = await prisma.task.deleteMany({
            where: {
                workspaceId: null
            }
        });

        const deletedTasks = count;

        console.log("Deleting " + deletedWorkspaces + " workspaces and " + deletedTasks + " tasks..."+Date());
    }
}

export const handleServices = new HandleServices();