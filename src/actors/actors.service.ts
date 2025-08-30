import { Injectable } from '@nestjs/common';
import { ActorCreateDto } from './dto/create-actor.dto';
import { ActorUpdateDto } from './dto/update-actor.dto';

@Injectable()
export class ActorsService {
  create(createActorDto: ActorCreateDto) {
    return 'This action adds a new actor';
  }

  findAll() {
    return `This action returns all actors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} actor`;
  }

  update(id: number, updateActorDto: ActorUpdateDto) {
    return `This action updates a #${id} actor`;
  }

  remove(id: number) {
    return `This action removes a #${id} actor`;
  }
}
