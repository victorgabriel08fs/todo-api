import { Router } from "express";
import { userController } from "../controllers/UserController";

const userRoutes = Router();

userRoutes.get("/",userController.index);
userRoutes.get("/:id",userController.show);
userRoutes.post("/",userController.store);
userRoutes.delete("/:id",userController.destroy);

export {userRoutes};