import bcrypt from "bcrypt";
import { error } from "node:console";
import { UserModel } from "../models/user.model.js";
import { signRefreshToken } from "../utils/jwt.js";
export class AuthService {
    static async register(input) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.email)) {
            throw error('Invalid email format');
        }
        if (input.username.length < 3 || input.username.length > 24) {
            throw error('Username must be 3-24 characters');
        }
        // Password validation
        // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        // if (!passwordRegex.test(input.password)) {
        //     throw error('Password must be 8+ chars with uppercase, lowercase, number, and special char');
        // }
        const existing = await UserModel.findByEmail(input.email);
        if (existing) {
            throw error("Email already in use!");
        }
        try {
            const hashedPassword = await bcrypt.hash(input.password, 12);
            var newUser = {
                username: input.username,
                password: hashedPassword,
                email: input.email,
                role: "player",
                gender: "",
                birthday: undefined,
                avatar: 0,
                country: "",
                createdAt: new Date(),
                updateAt: new Date(),
            };
            await UserModel.create(newUser);
            const token = signRefreshToken({
                email: newUser.email,
                role: newUser.role
            });
            return {
                user: {
                    username: newUser.username,
                    email: newUser.email,
                    role: newUser.role
                },
                token
            };
        }
        catch (err) {
            throw error(err);
        }
    }
    static async login(input) {
        const existing = await UserModel.findByEmail(input.email);
        if (!existing) {
            throw error("Email already in use!");
        }
        const isMatch = await bcrypt.compare(input.password, existing.password);
        if (!isMatch) {
            throw error("Invalid email or password!");
        }
        const token = signRefreshToken({
            email: existing.email,
            role: existing.role
        });
        return {
            user: {
                username: existing.username,
                email: existing.email,
                role: existing.role
            },
            token
        };
    }
    static async getSafeUser(email) {
        if (!email) {
            throw error("Email is empty!");
        }
        const existing = await UserModel.findByEmail(email);
        if (!existing) {
            throw error("User not found!");
        }
        return {
            user: {
                username: existing.username,
                email: existing.email,
                role: existing.role
            },
            token: ''
        };
    }
}
//# sourceMappingURL=auth.service.js.map