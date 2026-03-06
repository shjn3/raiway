import type { AuthResponse, LoginInput, RegisterInput } from "../types/index.js";
export declare class AuthService {
    static register(input: RegisterInput): Promise<AuthResponse>;
    static login(input: LoginInput): Promise<AuthResponse>;
    static getSafeUser(email: string): Promise<AuthResponse>;
}
//# sourceMappingURL=auth.service.d.ts.map