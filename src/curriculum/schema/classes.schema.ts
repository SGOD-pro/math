// import { Document, Schema, Types, model } from "mongoose";

// export interface Classes extends Document {
//     name: string;
//     boardId: Types.ObjectId;
//     className:string|number
// }

// export const classSchema = new Schema<Classes>(
//     {
//         name: {
//             type: String,
//             required: true,
//         },
//         boardId: {
//             type: Schema.Types.ObjectId,
//             ref: "boards",
//             required: true,
//         },
//         className: {
//             type: String,
//             required: true,
//         },
//     },
//     { timestamps: true }
// );

// export const ClassesModel = model<Classes>("classes", classSchema);

import { Document, Types } from "mongoose";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Board } from "./boards.schema";

export type ClassesDocument = Classes & Document
@Schema({ timestamps: true })
export class Classes {
    @Prop({ required: true, type: String })
    name: string

    @Prop({ required: true, type: Types.ObjectId, ref: Board.name })
    boardId: Types.ObjectId

    @Prop({ required: true, type: String })
    className: string
}

export const ClassesSchema = SchemaFactory.createForClass(Classes)