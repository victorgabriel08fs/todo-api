import { workspaceUseCases } from "../useCases/WorkspaceUseCases";

class WorkspaceController {
    async index(req, res) {
        const userId = req.params.userId;

        const result = await workspaceUseCases.index(userId);

        return res.status(200).json(result);
    }

    async store(req, res) {
        const data = req.body;

        const result = await workspaceUseCases.store(data);

        return res.status(201).json(result);
    }

    async delete(req, res) {
        const id = req.params.id;

        const result = await workspaceUseCases.delete(id);

        return res.status(202).json(result);
    }
}

export const workspaceController = new WorkspaceController();