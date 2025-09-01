import { Module } from '@nestjs/common';
import { GenresService } from './genres.service';
import { GenresController } from './genres.controller';
import { GenreRepository } from './genres.repository';

@Module({
  controllers: [GenresController],
  providers: [GenresService, GenreRepository],
})
export class GenresModule {}
