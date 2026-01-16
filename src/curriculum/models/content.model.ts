
import { Schema, model, Types,Document } from "mongoose";

export type QuestionType =
  | "mcq"
  | "multiple_select"
  | "fill_blank"
  | "true_false"
  | "image_mcq"
  | "image_question"
  | "code_input";

export interface IOption {
  label?: string | null;
  image?: string | null;
}

export interface IContentMetadata {
  difficulty: "easy" | "medium" | "hard";
  tags: string[];
  marks: number;
}

export interface IContent extends Document {
  gradeBoardId: Types.ObjectId;
  type: QuestionType;
  questionText?: string;
  questionImage?: string;
  options: IOption[];
  correctAnswers: string[];
  metadata: IContentMetadata;
}

const optionSchema = new Schema<IOption>(
  {
    label: { type: String, default: null },
    image: { type: String, default: null },
  },
  { _id: false }
);

const contentSchema = new Schema<IContent>(
  {
    gradeBoardId: {
      type: Schema.Types.ObjectId,
      ref: "GradeBoard",
      required: true,
    },

    type: {
      type: String,
      enum: [
        "mcq",
        "multiple_select",
        "fill_blank",
        "true_false",
        "image_mcq",
        "image_question",
        "code_input",
      ],
      required: true,
    },

    questionText: {
      type: String,
      trim: true,
    },

    questionImage: {
      type: String,
    },

    options: {
      type: [optionSchema],
      default: [],
    },

    correctAnswers: {
      type: [String],
      required: true,
    },

    metadata: {
      difficulty: {
        type: String,
        enum: ["easy", "medium", "hard"],
        default: "easy",
      },
      tags: {
        type: [String],
        default: [],
      },
      marks: {
        type: Number,
        default: 1,
      },
    },
  },
  { timestamps: true }
);

contentSchema.index({ gradeBoardId: 1, type: 1 });

export const Content = model<IContent>("Content", contentSchema);
