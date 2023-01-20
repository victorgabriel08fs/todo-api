import { Router } from "express";
import { taskController } from "../controllers/TaskController";

const taskRoutes = Router();

taskRoutes.get('/:userId', taskController.index);
taskRoutes.post('/', taskController.store);
taskRoutes.patch('/:id', taskController.done);
taskRoutes.delete('/:id', taskController.delete);

export { taskRoutes };