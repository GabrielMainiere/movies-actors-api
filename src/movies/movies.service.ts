import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { MoviesCreateDto } from './dto/create-movie.dto';
import { MoviesUpdateDto } from './dto/update-movie.dto';
import { MoviesDto } from './dto/movie.dto';
import { MovieRepository } from './movies.repository';

@Injectable()
export class MoviesService {
  constructor (private readonly movieRepository: MovieRepository){}

  async create(createMovieDto: MoviesCreateDto): Promise<MoviesDto> {

    const {name, synopsis, duration, genreId, actorsIds} = createMovieDto;

    if(!name || !synopsis || !duration || !genreId){
      throw new BadRequestException(
        "Missing required fields: name, synopsis, duration and genreId."
      );
    }
    return await this.movieRepository.create(createMovieDto);
  }

  async findAll(): Promise<MoviesDto[]> {

    const movies = await this.movieRepository.findAll();

    if(!movies) {
      throw new NotFoundException("No movies found in database.");
    }

    return await this.movieRepository.findAll();
  }

  async findOne(id: number): Promise<MoviesDto | null> {

    const movie = await this.movieRepository.findOne(id);

    if(!movie) {
      throw new NotFoundException(`No movie with id ${id} found in database.`);
    }

    return movie;
  }

  async update(id: number, updateMovieDto: MoviesUpdateDto): Promise<MoviesDto | null> {

    const movie = await this.movieRepository.findOne(id);

    if(!movie) {
      throw new NotFoundException(`No movie with id ${id} found in database.`);
    }

    return await this.movieRepository.update(id, updateMovieDto);
  }

  async remove(id: number): Promise<void> {

    const movie = await this.movieRepository.findOne(id);

    if(!movie) {
      throw new NotFoundException(`No movie with id ${id} found in database.`);
    }

    await this.movieRepository.remove(id); 
  }
}
