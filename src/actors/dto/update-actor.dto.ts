import { PartialType } from '@nestjs/mapped-types';
import { ActorCreateDto } from './create-actor.dto';

export class ActorUpdateDto extends PartialType(ActorCreateDto) {}
