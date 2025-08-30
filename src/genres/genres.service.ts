import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { GenreCreateDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { GenreRepository } from './genres.repository';
import { GenreDto } from './dto/genre.dto';

@Injectable()
export class GenresService {

  constructor(private readonly genreRepository: GenreRepository){}

  async create(createGenreDto: GenreCreateDto): Promise<GenreDto> {
    const { name } = createGenreDto
    if (!name) {
      throw new BadRequestException("Missing a require field: name");
    }  
    
    return await this.genreRepository.create(createGenreDto);
  }

  async findAll(): Promise<GenreDto[]> {
    const genres = this.genreRepository.findAll();

    if ((await genres).length === 0) {
      throw new NotFoundException("No genres found in database.");  
    }
    return await this.genreRepository.findAll();
  }

  async findOne(id: number): Promise<GenreDto | null> {
    const genre = await this.genreRepository.findOne(id);

    if (!genre) {
      throw new NotFoundException("No genre with `${id}` found in database.");  
    }

    return await this.genreRepository.findOne(id)
  }

  async update(id: number, updateGenreDto: UpdateGenreDto): Promise<GenreDto> {
    const genre = await this.genreRepository.findOne(id);

    if (!genre) {
      throw new NotFoundException("No genre with `${id}` found in database.");  
    }
    return await this.genreRepository.update(id, updateGenreDto)
  }

  async remove(id: number): Promise<void> {
    const genre = await this.genreRepository.findOne(id);

    if (!genre) {
      throw new NotFoundException(`No genre with ${id} found in database.`);  
    }

    await this.genreRepository.remove(id);
  }
}
