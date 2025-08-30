import { MoviesDto } from "src/movies/dto/movie.dto";
import Actor from "../entities/actor.entity";

export class ActorDto {
    id: number;
    name: string;
    birthdate: Date;
    movies: MoviesDto[] = [];

    constructor(id: number, name: string, birthdate: Date, movies?: MoviesDto[]) {
        this.id = id;
        this.name = name;
        this.birthdate = birthdate;
        if (movies) this.movies = movies;
    }

    static fromEntity(actor: Actor): ActorDto {
        const moviesDtos = actor.movies ? actor.movies.map(MoviesDto.fromEntity) : [];
        return new ActorDto(actor.id, actor.name, actor.birthDate, moviesDtos);
    }
}
