import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";

import { Board, BoardDocument } from './schema/boards.schema';
import { CreateBoardDTO, UpdateBoardDto } from "./curriculumn.dto";

@Injectable()
export class CurriculumRepository {
    constructor(
        @InjectModel(Board.name)
        private readonly boardModel: Model<BoardDocument>,
    ) { }

    async createBoard(data: CreateBoardDTO) {
        return await this.boardModel.create({
            name: data.name,
            code: data.code,
        });
    }

    async updateBoard(id: string, data: UpdateBoardDto) {
        if (!Types.ObjectId.isValid(id)) {
            throw new BadRequestException('Invalid board id');
        }
        return await this.boardModel.findByIdAndUpdate(id, data,
            { new: true, runValidators: true }
        )
    }
}