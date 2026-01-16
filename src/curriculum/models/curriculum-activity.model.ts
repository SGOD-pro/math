import { Schema, model, Types, Document } from "mongoose";


export interface ICurriculumActivity extends Document{
  studentId: Types.ObjectId;
  curriculumId: Types.ObjectId;
  contentId: Types.ObjectId;
  isActive: boolean;
  activatedAt: Date;
  completedAt?: Date;
  progress: number;
}

const curriculumActivitySchema = new Schema<ICurriculumActivity>(
  {
    studentId: {
      type: Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },

    curriculumId: {
      type: Schema.Types.ObjectId,
      ref: "Curriculum",
      required: true,
    },

    contentId: {
      type: Schema.Types.ObjectId,
      ref: "Content",
      required: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    activatedAt: {
      type: Date,
      default: Date.now,
    },

    completedAt: {
      type: Date,
    },

    progress: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

curriculumActivitySchema.index(
  { studentId: 1, curriculumId: 1, contentId: 1 },
  { unique: true }
);

export const CurriculumActivity = model<ICurriculumActivity>(
  "CurriculumActivity",
  curriculumActivitySchema
);
