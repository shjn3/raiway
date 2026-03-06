import mongoose, { Document, Model, Schema } from "mongoose";
const UserSchema = new Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
    },
    role: {
        type: String,
    },
    gender: {
        type: String,
    },
    birthday: {
        type: Date
    },
    avatar: {
        type: Number,
    },
    country: {
        type: String
    },
    createdAt: {
        type: Date
    },
    updateAt: {
        type: Date
    }
});
UserSchema.index({ email: 1 });
UserSchema.index({ createdAt: 1 });
UserSchema.methods.comparePassword = async function (passwork) {
    return new Promise((re) => {
        re(true);
    });
};
UserSchema.statics.findByEmail = async function (email) {
    return this.findOne({ email: email });
};
export const UserModel = mongoose.model("User", UserSchema);
//# sourceMappingURL=user.model.js.map