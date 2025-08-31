import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ActorsService } from './actors.service';
import { ActorCreateDto } from './dto/create-actor.dto';
import { ActorUpdateDto } from './dto/update-actor.dto';

@Controller('actors')
export class ActorsController {
  constructor(private readonly actorsService: ActorsService) {}

  @Post()
  async create(@Body() createActorDto: ActorCreateDto) {
    return await this.actorsService.create(createActorDto);
  }

  @Get()
  async findAll() {
    return await this.actorsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.actorsService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateActorDto: ActorUpdateDto) {
    return await this.actorsService.update(+id, updateActorDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.actorsService.remove(+id);
  }
}
