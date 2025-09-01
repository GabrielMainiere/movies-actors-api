import { Module } from '@nestjs/common';
import { ActorsService } from './actors.service';
import { ActorsController } from './actors.controller';
import { ActorRepository } from './actors.repository';

@Module({
  controllers: [ActorsController],
  providers: [ActorsService, ActorRepository],
})
export class ActorsModule {}
