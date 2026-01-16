import { Document, Types } from "mongoose";

// export interface Chapters extends Document {
//     subjectId: Types.ObjectId;
//     chapterName: string;
//     title:string
// }
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Subject } from "./subjects.schema";

// export const chapterSchema = new Schema<Chapters>(
//     {
//         subjectId: {
//             type: Schema.Types.ObjectId,
//             ref: "subjects",
//             required: true,
//         },
//         chapterName: {
//             type: String,
//             required: true,
//         },
//         title: {
//             type: String,
//             required: true,
//         },
//     },
//     { timestamps: true }
// );

export type ChapterDocument = Chapter & Document;

@Schema({ timestamps: true })
export class Chapter {
    @Prop({
        type: Types.ObjectId,
        ref: Subject.name,
        required: true,
    })
    subjectId: Types.ObjectId;

    @Prop({ required: true })
    chapterNumber: number;

    @Prop({ required: true })
    title: string;
}
// export const ChaptersModel = model<Chapters>("chapters", chapterSchema);

export const ChapterSchema = SchemaFactory.createForClass(Chapter);