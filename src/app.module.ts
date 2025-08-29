import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmesModule } from './filmes/filmes.module';
import { MoviesModule } from './movies/movies.module';
import { ActorsModule } from './actors/actors.module';
import { GenresModule } from './genres/genres.module';

@Module({
  imports: [FilmesModule, MoviesModule, ActorsModule, GenresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
