import { UserModel } from "../models/user.model.js";
import { verifyRefreshToken } from "../utils/jwt.js";
export const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, error: 'UNAUTHORIZED', message: 'Token missing' });
    }
    const token = authHeader.split(" ")[1];
    const payload = verifyRefreshToken(token);
    try {
        const user = await UserModel.findByEmail(payload.email);
        if (!user) {
            res.status(401).json({ success: false, message: "User no longer exists" });
            return;
        }
        req.user = {
            email: user.email,
        };
        next();
    }
    catch (error) {
        res.status(401).json({ success: false, error: 'INVALID_TOKEN', message: 'Invalid token' });
    }
};
//# sourceMappingURL=auth.middleware.js.map