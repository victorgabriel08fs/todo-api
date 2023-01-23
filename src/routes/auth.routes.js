import { Router } from "express";
import { authController } from "../controllers/AuthController";

const authRoutes = Router();

authRoutes.post('/login', authController.login);

export { authRoutes };