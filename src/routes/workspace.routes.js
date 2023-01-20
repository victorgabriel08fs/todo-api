import { Router } from "express";
import { workspaceController } from "../controllers/WorkspaceController";

const workspaceRoutes = Router();

workspaceRoutes.get("/:userId", workspaceController.index);
workspaceRoutes.post("/", workspaceController.store);
workspaceRoutes.get("/:id", workspaceController.delete);

export { workspaceRoutes };