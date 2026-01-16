import { Module } from '@nestjs/common';
import { CurriculumService } from './curriculum.service';
import { CurriculumController } from './curriculum.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Board,BoardSchema } from './schema/boards.schema';
import { Chapter,ChapterSchema } from './schema/chapters.schema';
import { Classes,ClassesSchema } from './schema/classes.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {name:Board.name, schema: BoardSchema },
    {name:Chapter.name, schema: ChapterSchema},
    {name:Classes.name, schema: ClassesSchema}
  ])],
  providers: [CurriculumService],
  controllers: [CurriculumController]
})
export class CurriculumModule {}
