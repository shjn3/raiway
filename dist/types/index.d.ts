export interface SafeUser {
    username: string;
    email: string;
    role: string;
}
export interface RegisterInput {
    username: string;
    email: string;
    password: string;
}
export interface LoginInput {
    email: string;
    password: string;
}
export interface UpdateProfileInput {
    gender: string;
    birthday: string;
    avatar: number;
    country: string;
    email: string;
}
export interface AuthResponse {
    user: SafeUser;
    token: string;
}
export interface UserProfileResponse {
    gender: string;
    birthday: string;
    avatar: number;
    country: string;
}
//# sourceMappingURL=index.d.ts.map