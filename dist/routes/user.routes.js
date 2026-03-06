import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
const router = Router();
router.get('/profile', authMiddleware, UserController.getProfile);
router.patch('/profile', authMiddleware, UserController.updateProfile);
export default router;
//# sourceMappingURL=user.routes.js.map