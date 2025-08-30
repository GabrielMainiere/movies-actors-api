import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesCreateDto } from './dto/create-movie.dto';
import { MoviesUpdateDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  async create(@Body() createMovieDto: MoviesCreateDto) {
    return await this.moviesService.create(createMovieDto);
  }

  @Get()
  async findAll() {
    return await this.moviesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.moviesService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateMovieDto: MoviesUpdateDto) {
    return await this.moviesService.update(+id, updateMovieDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.moviesService.remove(+id);
  }
}
