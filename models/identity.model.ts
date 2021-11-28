import { Schema, model, Document } from 'mongoose';

export interface IdentityDocument extends Document {
  email: string;
  password: string;
  isVerified: boolean;
}

const IdentitySchema = new Schema<IdentityDocument>({
  email: { type: String, required: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, required: true },
}, {
  timestamps: true,
});

export const IdentityModel = model<IdentityDocument>('Identity', IdentitySchema);
