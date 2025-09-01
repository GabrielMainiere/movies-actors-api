import { PartialType } from '@nestjs/mapped-types';
import { MoviesCreateDto } from './create-movie.dto';

export class MoviesUpdateDto extends PartialType(MoviesCreateDto) {}