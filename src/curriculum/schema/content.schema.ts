
import { Types, Document } from "mongoose";

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// type QuestionType =
//   | "mcq"
//   | "multiple_select"
//   | "fill_blank"
//   | "true_false"
//   | "image_mcq"
//   | "image_question"
//   | "code_input";

// interface IOption {
//   label?: string | null;
//   image?: string | null;
// }

// interface IContentMetadata {
//   difficulty: "easy" | "medium" | "hard";
//   tags: string[];
//   marks: number;
// }

// interface IContent extends Document {
//   boardId: Types.ObjectId,
//   classId: Types.ObjectId,
//   subjectId: Types.ObjectId,
//   chapterId: Types.ObjectId,

//   type: QuestionType;
//   questionText?: string;
//   questionImage?: string;
//   options: IOption[];
//   correctAnswers: string[];
//   metadata: IContentMetadata;
// }

export type ContentDocument = Content & Document;

export enum QuestionType {
  MCQ = 'mcq',
  MULTIPLE_SELECT = 'multiple_select',
  FILL_BLANK = 'fill_blank',
  TRUE_FALSE = 'true_false',
  IMAGE_MCQ = 'image_mcq',
  IMAGE_QUESTION = 'image_question',
  CODE_INPUT = 'code_input',
}


@Schema({ _id: false })
export class Option {
  @Prop({ default: null })
  label?: string;

  @Prop({ default: null })
  image?: string;
}

const OptionSchema = SchemaFactory.createForClass(Option);


@Schema({ _id: false })
class ContentMetadata {
  @Prop({ enum: ['easy', 'medium', 'hard'], default: 'easy' })
  difficulty: 'easy' | 'medium' | 'hard';

  @Prop({ type: [String], default: [] })
  tags: string[];

  @Prop({ default: 1 })
  marks: number;
}
const ContentMetadataSchema =
  SchemaFactory.createForClass(ContentMetadata);


import { Board } from "./boards.schema";
import { Classes } from "./classes.schema";
// import { Subject } from "rxjs";
import { Chapter } from "./chapters.schema";
import { Subject } from "./subjects.schema";

@Schema({ timestamps: true })
export class Content {
  @Prop({
    type: Types.ObjectId,
    ref: Board.name,
    required: true,
  })
  boardId: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: Classes.name,
    required: true,
  })
  classId: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: Subject.name,
    required: true,
  })
  subjectId: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: Chapter.name,
    required: true,
  })
  chapterId: Types.ObjectId;



  @Prop({
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
  })
  type: QuestionType;

  @Prop({
    type: String,
    trim: true,
  })
  questionText?: string;


  @Prop({
    type: String,
  })
  questionImage?: string;


  @Prop({ type: [OptionSchema], default: [] })
  options: Option[];


  @Prop({
    type: [String],
    required: true,
  })
  correctAnswers: string[];

  @Prop({ type: ContentMetadataSchema })
  metadata: ContentMetadata;
}


export const ContentSchema = SchemaFactory.createForClass(Content);