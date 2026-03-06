import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
const router = Router();
router.get('/', authMiddleware, AuthController.getSafeUser);
router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
export default router;
//# sourceMappingURL=auth.routes.js.map