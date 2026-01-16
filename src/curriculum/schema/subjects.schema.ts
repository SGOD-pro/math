
import { Types, Document } from "mongoose";

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type SubjectsDocument = Subject & Document;

@Schema({ timestamps: true })
export class Subject {
    @Prop({
        type: String,
        required: true,
    })
    name: String

    @Prop({
        type: Types.ObjectId,
        ref: "boards",
        required: true,
    })
    boardId: Types.ObjectId

    @Prop({
        type: Types.ObjectId,
        ref: "classes",
        required: true,
    })
    classId: Types.ObjectId

    @Prop({
        type: String,
        required: true,
    })
    code: String
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);