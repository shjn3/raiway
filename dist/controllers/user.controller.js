import { UserService } from "../services/user.service.js";
export class UserController {
    static getProfile = async (req, res, nextFuction) => {
        try {
            var profile = await UserService.getProfile(req.user);
            res.status(200).json({
                success: true,
                profile,
                message: 'successfully!'
            });
        }
        catch (err) {
            res.status(404).json({
                success: false,
                message: err
            });
        }
    };
    static updateProfile = async (req, res, nextFuction) => {
        try {
            var profile = await UserService.updateProfile({
                email: req.user?.email || '',
                ...req.body,
            });
            res.status(200).json({
                success: true,
                profile,
                message: 'successfully!'
            });
        }
        catch (err) {
            res.status(404).json({
                success: false,
                message: err
            });
        }
    };
}
//# sourceMappingURL=user.controller.js.map