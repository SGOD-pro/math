import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, IsEnum, IsArray, Min, IsMongoId, ValidateNested, isNotEmpty } from "class-validator"
import { Type } from "class-transformer";
import { PartialType } from "@nestjs/mapped-types";

export enum BoardName {
  CBSE = "CBSE",
  ICSE = "ICSE",
  WBBSE = "WBBSE"
}
export class CreateBoardDTO {
  @IsNotEmpty()
  @IsEnum(BoardName)
  name: BoardName

  @IsNotEmpty()
  @IsString()
  code: string
}


export class UpdateBoardDto extends PartialType(CreateBoardDTO) {}

export class CreateChapterDTO {
  @IsNotEmpty()
  @IsMongoId()
  subjectId: string

  @IsNotEmpty()
  @IsString()
  title: string

  @IsNotEmpty()
  @IsString()
  @IsNumber()
  chapterName: string | number
}

export class CreateClasseDTO {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsMongoId()
  boardId: string

  @IsNotEmpty()
  @IsString()
  className: string
}

export enum ContentType {
  MCQ = "mcq",
  MULTIPLE_SELECT = "multiple_select",
  FILL_BLANK = "fill_blank",
  TRUE_FALSE = "true_false",
  IMAGE_MCQ = "image_mcq",
  IMAGE_QUESTION = "image_question",
  CODE_INPUT = "code_input",
}

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}
export class OptionDto {
  @IsNotEmpty()
  @IsString()
  text: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsBoolean()
  isCorrect?: boolean; // optional, since you also have correctAnswers
}
export class ContentMetadataDto {
  @IsOptional()
  @IsEnum(Difficulty)
  difficulty?: Difficulty;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @IsOptional()
  @IsNumber()
  @Min(0)
  marks?: number;
}


export class CreateContentDto {
  @IsNotEmpty()
  @IsMongoId()
  boardId: string;

  @IsNotEmpty()
  @IsMongoId()
  classId: string;

  @IsNotEmpty()
  @IsMongoId()
  subjectId: string;

  @IsNotEmpty()
  @IsMongoId()
  chapterId: string;

  @IsNotEmpty()
  @IsEnum(ContentType)
  type: ContentType;

  @IsOptional()
  @IsString()
  questionText?: string;

  @IsOptional()
  @IsString()
  questionImage?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OptionDto)
  options?: OptionDto[];

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  correctAnswers: string[];

  @IsOptional()
  @ValidateNested()
  @Type(() => ContentMetadataDto)
  metadata?: ContentMetadataDto;
}

//TODO: Curriculum-actrivity not writen yet


export class CreateCurriculumDto {
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateContentDto)
  contents: CreateContentDto[];
}

export class CreateSubjectDto {
  @IsNotEmpty()
  @IsMongoId()
  boardId: string;

  @IsNotEmpty()
  @IsMongoId()
  classId: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  code: string;
}