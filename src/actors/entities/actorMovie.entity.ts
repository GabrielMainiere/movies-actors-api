import { Table, Column, Model, ForeignKey } from "sequelize-typescript";
import Movies from "src/movies/entities/movie.entity";
import Actor from "./actor.entity";

@Table({
  tableName: "actor_movie_tbl",
  modelName: "ActorMovie",
  timestamps: false,
})
export default class ActorMovie extends Model {
  @ForeignKey(() => Movies)
  @Column
  declare movieId: number;

  @ForeignKey(() => Actor)
  @Column
  declare actorId: number;
}
