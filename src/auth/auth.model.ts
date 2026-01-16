import { Schema, model, Types, Document } from "mongoose";

export type UserRole = "admin" | "teacher" | "student";

export interface IUser extends Document {
  username: string;
  password: string;
  role: UserRole;
  refreshToken?: string
}

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["admin", "teacher", "student"],
      required: true,
    },

    refreshToken: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

export const User = model<IUser>("User", userSchema);
