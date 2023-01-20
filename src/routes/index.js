import { Router } from "express";
import { taskRoutes } from "./task.routes";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/task", taskRoutes);

export { routes };