import { PartialType } from '@nestjs/mapped-types';
import { GenreCreateDto } from './create-genre.dto';

export class UpdateGenreDto extends PartialType(GenreCreateDto) {}
