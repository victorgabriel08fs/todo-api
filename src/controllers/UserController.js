import { userUseCases } from "../useCases/UserUseCases";

class UserController {
    async index(req, res) {
        const result = await userUseCases.index();

        return res.status(200).json(result);
    }

    async show(req, res) {
        const id = req.params.id;

        const result = await userUseCases.show(id);

        return res.status(200).json(result);
    }

    async store(req, res) {
        const data = req.body;
        data.avatar = req.file.filename;
        const result = await userUseCases.store(data);

        return res.status(201).json("asdasd");
    }

    async destroy(req, res) {
        const id = req.params.id;

        const result = await userUseCases.destroy(id);

        return res.status(202).json({ deleted: result });
    }


}

export const userController = new UserController();