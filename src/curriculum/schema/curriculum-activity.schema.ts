
import { Types, Document } from "mongoose";

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Curriculum } from "./curriculum.schema";
import { Content } from "./content.schema";

export type CurriculumActivityDocument = CurriculumActivity & Document

@Schema({ timestamps: true })
export class CurriculumActivity {
  @Prop({
    type: Types.ObjectId,
    ref: "students",
    required: true,
  })
  studentId: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: Curriculum.name,
    required: true,
  })
  curriculumId: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: Content.name,
    required: true,
  })
  contentId: Types.ObjectId;

  @Prop({
    type: Boolean,
    default: true,
  })
  isActive: boolean;

  @Prop({
    type: Date,
    default: Date.now,
  })
  activatedAt: Date;

  @Prop({
    type: Date,
  })
  completedAt?: Date;

  @Prop({
    type: Number,
    default: 0,
  })
  progress: number;
}

export const CurriculumActivitySchema = SchemaFactory.createForClass(CurriculumActivity);