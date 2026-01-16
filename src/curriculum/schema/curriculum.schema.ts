import { Types, Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Content } from "./content.schema";
import { Board } from "./boards.schema";


@Schema(  { timestamps: true })
export class Curriculum {
  @Prop({
    type: Types.ObjectId,
    ref: Board.name,
    required: true,
  })
  boardId: Types.ObjectId
  @Prop({
    type: [
      {
        type: Types.ObjectId,
        ref: Content.name,
        required: true,
      },
    ],
    required: true,
  })
  contentIds: Types.ObjectId[]

  // NOTE: NOT FOR NOW, LATER ON!
  // day: {
  //   type: String,
  //   enum: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
  //   required: true,
  // },
}
export const CurriculumSchema = SchemaFactory.createForClass(Curriculum);