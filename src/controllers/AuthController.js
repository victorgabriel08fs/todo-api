import { authUseCases } from "../useCases/AuthUseCases";

class AuthController {
    async login(req, res) {
        const { email, password } = req.body;

        const result = await authUseCases.login(email, password);

        return res.status(!result ? 401 : 200).json({user:result,token:"adasdasd"});
    }
}

export const authController = new AuthController();