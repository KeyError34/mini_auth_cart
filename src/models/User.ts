import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from '../types/index';

export interface IUserData extends IUser, Document {
  cart: mongoose.Types.ObjectId;
}

const UserSchema = new Schema<IUserData>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cart: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' },
});

export default mongoose.model<IUserData>('User', UserSchema);
