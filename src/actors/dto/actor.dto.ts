import { MoviesDto } from "src/movies/dto/movie.dto";
import Actor from "../entities/actor.entity";

export class ActorDto {
    id: number;
    name: string;
    birthdate: Date;
    movies: MoviesDto[] = [];
    links?: { rel: string; href: string }[];

    constructor(id: number, name: string, birthdate: Date, movies?: MoviesDto[], links?: { rel: string; href: string }[]) {
        this.id = id;
        this.name = name;
        this.birthdate = birthdate;
        if (movies) this.movies = movies;
        if (links) this.links = links;
    }

    static fromEntity(actor: Actor): ActorDto {
        const moviesDtos = actor.movies ? actor.movies.map(MoviesDto.fromEntity) : [];
        const links = [
            { rel: 'self', href: `/actors/${actor.id}` },
            { rel: 'update', href: `/actors/${actor.id}` },
            { rel: 'create', href: `/actors` },
            { rel: 'delete', href: `/actors/${actor.id}` },
        ];
        return new ActorDto(actor.id, actor.name, actor.birthdate, moviesDtos, links);
    }
}
