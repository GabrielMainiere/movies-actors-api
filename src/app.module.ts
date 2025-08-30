import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { ActorsModule } from './actors/actors.module';
import { GenresModule } from './genres/genres.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [MoviesModule, ActorsModule, GenresModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
