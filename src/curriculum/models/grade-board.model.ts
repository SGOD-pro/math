import { Schema, model, Types,Document } from "mongoose";

export interface IGradeBoard extends Document {
  grade: string;
  board: string;
}

const gradeBoardSchema = new Schema<IGradeBoard>(
  {
    grade: {
      type: String,
      required: true,
      trim: true,
    },
    board: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

gradeBoardSchema.index({ grade: 1, board: 1 }, { unique: true });

export const GradeBoard = model<IGradeBoard>(
  "GradeBoard",
  gradeBoardSchema
);
