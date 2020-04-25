/* eslint-disable no-unused-vars */
import { Document, model, Schema } from 'mongoose';

// Interface to describe the user type attributes
export interface IUserType extends Document{
    description: string;
}

// Schema to verify description and export the userType model
const userTypeSchema: Schema = new Schema({
  description: { type: String, required: true, }
});

export default model<IUserType>('User-Type', userTypeSchema);
