import { Document, Model } from "mongoose";
export interface IUser {
    username: string;
    password: string;
    email: string;
    role: "player" | "dev" | "admin";
    gender: string;
    birthday: Date | undefined;
    avatar: number;
    country: string;
    createdAt: Date;
    updateAt: Date;
}
export interface IUserDocument extends IUser, Document {
    comparePassword(password: string): Promise<boolean>;
}
export interface IUserModel extends Model<IUserDocument> {
    findByEmail(email: string): Promise<IUserDocument | null>;
}
export declare const UserModel: IUserModel;
//# sourceMappingURL=user.model.d.ts.map