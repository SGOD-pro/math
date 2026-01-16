
import { Schema, model, Types, Document } from "mongoose";

export interface IStudent extends Document {
    userId: Types.ObjectId;
    email: string;
    curriculumIds: Types.ObjectId[];
}

const studentSchema = new Schema<IStudent>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true,
        },

        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },

        curriculumIds: [{
            type: Schema.Types.ObjectId,
            ref: "curriculums",
        },],

    },
    { timestamps: true }
);

export const Student = model<IStudent>("Student", studentSchema);
