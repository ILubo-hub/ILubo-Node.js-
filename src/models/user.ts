/* eslint-disable no-unused-vars */
import { Document, model, Schema } from 'mongoose';

import { IUserType } from './user-type';

// Interface to describe the user attributes
export interface IUser extends Document {
    email: string;
    password: string;
    userType: IUserType | string;
}

// Schema to verify email, password, usertype, add timespamps and export the user model
const userSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: Schema.Types.ObjectId, ref: 'user-type', required: true }
}, {
  timestamps: true
});

export default model<IUser>('User', userSchema);
