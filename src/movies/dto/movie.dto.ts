import Movies from "../entities/movie.entity";
import { ActorDto } from "src/actors/dto/actor.dto";

export class MoviesDto {
    id: number;
    name: string;
    synopsis: string;
    actors: ActorDto[] = [];

    constructor(id: number, name: string, synopsis: string, actors?: ActorDto[]) {
        this.id = id;
        this.name = name;
        this.synopsis = synopsis;
        if (actors) this.actors = actors;
    }

    static fromEntity(movie: Movies): MoviesDto {
        const actorsDtos = movie.actors ? movie.actors.map(ActorDto.fromEntity) : [];
        return new MoviesDto(movie.id, movie.name, movie.synopsis, actorsDtos);
    }
}
