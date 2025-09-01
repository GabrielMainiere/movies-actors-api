import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { GenresService } from './genres.service';
import { GenreCreateDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Controller('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  @Post()
  async create(@Body() createGenreDto: GenreCreateDto) {
    return await this.genresService.create(createGenreDto);
  }

  @Get()
  async findAll() {
    return await this.genresService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.genresService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateGenreDto: UpdateGenreDto) {
    return await this.genresService.update(+id, updateGenreDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.genresService.remove(+id);
  }
}
