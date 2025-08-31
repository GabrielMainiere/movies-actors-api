import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, BelongsToMany } from "sequelize-typescript";
import Movies from "src/movies/entities/movie.entity";
import ActorMovie from "./actorMovie.entity";

@Table({
  tableName: "actors_tbl",
  modelName: "Actor",
  timestamps: true,
})
export default class Actor extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @Column(DataType.STRING)
  declare name: string;

  @Column(DataType.DATE)
  declare birthdate: Date;

  @BelongsToMany(() => Movies, () => ActorMovie)
  declare movies: Movies[];
}