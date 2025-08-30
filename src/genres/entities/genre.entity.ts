import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, BelongsToMany, AllowNull, Unique } from "sequelize-typescript";

@Table({
  tableName: "genre_tbl",
  modelName: "Genre",
  timestamps: true,
})
export default class Genre extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @AllowNull(false)
  @Unique(true)
  @Column(DataType.STRING)
  declare name: string;
}