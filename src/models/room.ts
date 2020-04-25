/* eslint-disable no-unused-vars */
import { Document, model, Schema } from 'mongoose';
import { IUser } from './user';

export interface IRoom extends Document {
    accessKey: string;
    accessCount: number;
    capacity: number;
    isValid: boolean;
    user: IUser;
}

const roomSchema: Schema = new Schema({
  accessKey: { type: String, required: true },
  accessCount: { type: Number },
  capacity: { type: Number, required: true },
  isValid: { type: Boolean, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'user', required: true }
}, {
  timestamps: true
});

export default model<IRoom>('Room', roomSchema);
