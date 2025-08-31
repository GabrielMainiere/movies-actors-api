import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ActorCreateDto } from './dto/create-actor.dto';
import { ActorUpdateDto } from './dto/update-actor.dto';
import { ActorDto } from './dto/actor.dto';
import { ActorRepository } from './actors.repository';
import { ActorSimpleDto } from './dto/actor-simple.dto';

@Injectable()
export class ActorsService {
  constructor(private readonly actorRepository: ActorRepository) {}

  async create(createActorDto: ActorCreateDto): Promise<ActorDto> {
    const { name, birthdate } = createActorDto;

    if (!name || !birthdate) {
      throw new BadRequestException(
        'Missing required fields: name and birthdate.',
      );
    }

    return await this.actorRepository.create(createActorDto);
  }

  async findAll(): Promise<ActorDto[]> {
    const actors = await this.actorRepository.findAll();

    if (!actors || actors.length === 0) {
      throw new NotFoundException('No actors found in database.');
    }

    return actors;
  }

  async findOne(id: number): Promise<ActorDto | null> {
    const actor = await this.actorRepository.findOne(id);

    if (!actor) {
      throw new NotFoundException(
        `No actor with id ${id} found in database.`,
      );
    }

    return actor;
  }

  async update(id: number, updateActorDto: ActorUpdateDto): Promise<ActorSimpleDto | null> {
    const actor = await this.actorRepository.findOne(id);

    if (!actor) {
      throw new NotFoundException(
        `No actor with id ${id} found in database.`,
      );
    }

    return await this.actorRepository.update(id, updateActorDto);
  }

  async remove(id: number): Promise<void> {
    const actor = await this.actorRepository.findOne(id);

    if (!actor) {
      throw new NotFoundException(
        `No actor with id ${id} found in database.`,
      );
    }

    await this.actorRepository.remove(id);
  }
}
