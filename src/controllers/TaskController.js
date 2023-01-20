import { taskUseCases } from "../useCases/TaskUseCases";

class TaskController {
    async index(req, res) {
        const userId = req.params.userId;

        const result = await taskUseCases.index(userId);

        return res.status(200).json(result);
    }


    async store(req, res) {
        const data = req.body;

        const result = await taskUseCases.store(data);

        return res.status(201).json(result);
    }

    async done(req, res) {
        const id = req.params.id;

        const done = req.body.done;

        const result = await taskUseCases.done(id, done);

        return res.status(201).json(result);
    }

    async delete(req, res) {
        const id = req.params.id;
        const result = await taskUseCases.delete(id);

        return res.status(202).json({ deleted: result });
    }
}

export const taskController = new TaskController();