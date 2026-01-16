import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BoardDocument = Board & Document;

export type BoardName = 'CBSE' | 'ICSE' | 'WBBSE';

@Schema({ timestamps: true })
export class Board {
  @Prop({
    required: true,
    enum: ['CBSE', 'ICSE', 'WBBSE'],
  })
  name: BoardName;

  @Prop({ required: true })
  code: string;
}

export const BoardSchema = SchemaFactory.createForClass(Board);
