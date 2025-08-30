import { Injectable } from '@nestjs/common';
import { MoviesCreateDto } from './dto/create-movie.dto';
import { MoviesUpdateDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  create(createMovieDto: MoviesCreateDto) {
    return 'This action adds a new movie';
  }

  findAll() {
    return `This action returns all movies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} movie`;
  }

  update(id: number, updateMovieDto: MoviesUpdateDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
