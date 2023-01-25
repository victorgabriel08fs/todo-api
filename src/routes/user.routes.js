import { Router } from "express";
import { userController } from "../controllers/UserController";
import multer from 'multer';
const upload = multer({ dest: '../web/public/assets/images/' })
const userRoutes = Router();

userRoutes.get("/", userController.index);
userRoutes.get("/:id", userController.show);
userRoutes.post("/", upload.single('avatar'), userController.store);
userRoutes.delete("/:id", userController.destroy);
userRoutes.get('/avatar/show', (req, res) => {
    return res.render('../../uploads/d83c9c57cfab3f3bf1afb60a6e08a008');
})

export { userRoutes };