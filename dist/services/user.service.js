import { error } from "node:console";
import { UserModel } from "../models/user.model.js";
export class UserService {
    static getProfile = async (userInput) => {
        if (!userInput) {
            throw error("user is not exist");
        }
        const user = await UserModel.findByEmail(userInput?.email);
        if (!user) {
            throw error("user is not exists");
        }
        return {
            birthday: user.birthday?.toString() || '',
            gender: user.gender || "Male",
            avatar: user.avatar,
            country: user.country
        };
    };
    static updateProfile = async (profileInput) => {
        if (!profileInput) {
            throw error("user is not exist");
        }
        const user = await UserModel.findOneAndUpdate({
            email: profileInput.email
        }, {
            ...profileInput
        });
        if (!user) {
            throw error("user is not exists");
        }
        return {
            birthday: profileInput.birthday?.toString() || '',
            gender: profileInput.gender || "Male",
            avatar: profileInput.avatar,
            country: profileInput.country
        };
    };
}
//# sourceMappingURL=user.service.js.map