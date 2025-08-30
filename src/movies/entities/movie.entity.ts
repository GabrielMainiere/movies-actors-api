import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    CreatedAt,
    DeletedAt,
    BelongsToMany,
    ForeignKey,
} from "sequelize-typescript";

import Actor from "src/actors/entities/actor.entity";
import Genre from "src/genres/entities/genre.entity";
import ActorMovie from "src/actors/entities/actorMovie.entity";

@Table({
    tableName: "movies_tbl",
    modelName: "Movies",
    timestamps: true
})
export default class Movies extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    declare id: number;

    @Column(DataType.STRING)
    declare name: string;

    @Column(DataType.STRING)
    declare synopsis: string;

    @Column(DataType.INTEGER)
    declare duration: number

    @CreatedAt
    declare createdAt: Date;

    @DeletedAt
    declare deletedAt: Date;
    
    @BelongsToMany(() => Actor, () => ActorMovie)
    declare actors: Actor[];

    @ForeignKey(() => Genre)
    @Column
    declare genreId: number;
}