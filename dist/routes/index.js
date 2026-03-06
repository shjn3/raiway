import { Router } from "express";
import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";
const router = Router();
router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.get('/', (
    req, res
) => {
    res.send("hello world");
})
export default router;
//# sourceMappingURL=index.js.map