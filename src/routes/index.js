import { Router } from "express";
import { taskRoutes } from "./task.routes";
import { userRoutes } from "./user.routes";
import { workspaceRoutes } from "./workspace.routes";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/task", taskRoutes);
routes.use("/workspace", workspaceRoutes);

export { routes };