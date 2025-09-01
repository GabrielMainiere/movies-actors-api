import Movies from "../entities/movie.entity";
import { ActorDto } from "src/actors/dto/actor.dto";

export class MoviesDto {
    id: number;
    name: string;
    synopsis: string;
    duration: number;
    actors: ActorDto[] = [];
    links?: { rel: string; href: string }[];

    constructor(id: number, name: string, synopsis: string, duration: number, actors?: ActorDto[], links?: { rel: string; href: string }[]) {
        this.id = id;
        this.name = name;
        this.synopsis = synopsis;
        this.duration = duration;
        if (actors) this.actors = actors;
        if (links) this.links = links;
    }

    static fromEntity(movie: Movies): MoviesDto {
        const actorsDtos = movie.actors ? movie.actors.map(ActorDto.fromEntity) : [];
        const links = [
            { rel: 'self', href: `/movies/${movie.id}` },
            { rel: 'update', href: `/movies/${movie.id}` },
            { rel: 'create', href: `/movies` },
            { rel: 'delete', href: `/movies/${movie.id}` },
        ];
        return new MoviesDto(movie.id, movie.name, movie.synopsis, movie.duration, actorsDtos, links);
    }
}
