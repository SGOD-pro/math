import { Schema, model, Types, Document } from "mongoose";


export interface ICurriculum extends Document {
  gradeBoardId: Types.ObjectId;
  contentIds: Types.ObjectId[];
  day: "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat";
}

const curriculumSchema = new Schema<ICurriculum>(
  {
    gradeBoardId: {
      type: Schema.Types.ObjectId,
      ref: "GradeBoard",
      required: true,
    },

    contentIds: [
      {
        type: Schema.Types.ObjectId,
        ref: "Content",
        required: true,
      },
    ],

    day: {
      type: String,
      enum: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
      required: true,
    },
  },
  { timestamps: true }
);

export const Curriculum = model<ICurriculum>(
  "Curriculum",
  curriculumSchema
);
