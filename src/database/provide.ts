import { Sequelize } from 'sequelize-typescript';
import Actor from 'src/actors/entities/actor.entity';
import ActorMovie from 'src/actors/entities/actorMovie.entity';
import Genre from 'src/genres/entities/genre.entity';
import Movies from 'src/movies/entities/movie.entity';

const dotenv = require('dotenv');
dotenv.config();

export const provide = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
            dialect: 'postgres',
            host: 'localhost',
            port: Number(process.env.DB_PORT) || 5432,
            username: process.env.DB_USER || "postgres",
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME || "postgres",
      });

      sequelize.addModels([Movies, Actor, Genre, ActorMovie]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
