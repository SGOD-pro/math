import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBoardDTO, UpdateBoardDto } from './curriculumn.dto';
import { CurriculumRepository } from './curriculum.repository';

@Injectable()
export class CurriculumService {
    constructor(private readonly curriculumRepository: CurriculumRepository) { }
    async addNewboard(data: CreateBoardDTO) {
        const res = await this.curriculumRepository.createBoard(data)
        return res;
    }
    async updateNewboard(id: string, data: UpdateBoardDto) {
        if (!Object.keys(data).length) {
            throw new BadRequestException("Update payload cannot be empty");
        }
        const res = await this.curriculumRepository.updateBoard(id, data)
        return res;
    }
}
