import { Body, Controller, Get } from '@nestjs/common';
import { CurriculumService } from './curriculum.service';
import { CreateBoardDTO } from './curriculumn.dto';

@Controller('curriculum')
export class CurriculumController {
    constructor(private readonly curriculumService: CurriculumService) { }

    @Get(':id')
    async addBoard(@Body() data: CreateBoardDTO) {
        return await this.curriculumService.addNewboard(data);
    }
}