import { AuthService } from "../services/auth.service.js";
export class AuthController {
    static register = async (req, res, next) => {
        try {
            const result = await AuthService.register(req.body);
            res.status(200).json({
                success: true,
                data: result,
            });
        }
        catch (err) {
            console.log("register-err: ", err);
            res.status(404).json({
                success: false,
                data: null
            });
        }
    };
    static login = async (req, res, next) => {
        try {
            const result = await AuthService.login(req.body);
            res.status(200).json({
                success: true,
                data: result,
            });
        }
        catch (err) {
            res.status(404).json({
                success: false,
                data: null
            });
        }
    };
    static getSafeUser = async (req, res, next) => {
        try {
            const result = await AuthService.getSafeUser(req.user?.email || '');
            res.status(200).json({
                success: true,
                data: result,
            });
        }
        catch (err) {
            res.status(404).json({
                success: false,
                data: null
            });
        }
    };
}
//# sourceMappingURL=auth.controller.js.map