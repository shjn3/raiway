import type { SimpleUser } from "../types/express.js";
import type { UpdateProfileInput, UserProfileResponse } from "../types/index.js";
export declare class UserService {
    static getProfile: (userInput: SimpleUser) => Promise<UserProfileResponse>;
    static updateProfile: (profileInput: UpdateProfileInput) => Promise<UserProfileResponse>;
}
//# sourceMappingURL=user.service.d.ts.map