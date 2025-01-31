import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    username: string;
    password: string;
}

const userSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        username: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model<IUser>('User', userSchema);
export default User;
