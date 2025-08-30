import { Injectable, NotFoundException } from "@nestjs/common";
import { MoviesDto } from "./dto/movie.dto";
import Movies from "./entities/movie.entity";
import Actor from "src/actors/entities/actor.entity";
import { MoviesUpdateDto } from "./dto/update-movie.dto";

@Injectable()
export class MovieRepository{

    async create(movieCreated): Promise<MoviesDto>{
        const created = await Movies.create({ ...movieCreated });
        return MoviesDto.fromEntity(created);
    }

    async update(id: number, movieUpdated: MoviesUpdateDto): Promise<MoviesDto | null> {
        const movie = await Movies.findByPk(id);

        if (!movie) {
            throw new NotFoundException("Movie not found"); 
        }
        await movie.update({
            name: movieUpdated.name,
            synopsis: movieUpdated.synopsis,
            duration: movieUpdated.duration,
            genreId: movieUpdated.genreId,
        });

        if (movieUpdated.actorsIds) {
            await movie.$set('actors', movieUpdated.actorsIds); 
        }

        return MoviesDto.fromEntity(movie);
    }

    async findAll(): Promise<MoviesDto[]>{
        const movies = await Movies.findAll({ include: [Actor] });
        return movies.map(movie => MoviesDto.fromEntity(movie));
    }

    async findOne(id: number): Promise<MoviesDto | null> {
        const movie = await Movies.findByPk(id, { include: [Actor] });
        return movie ? MoviesDto.fromEntity(movie) : null;
    }

    async remove(id : number): Promise<void>{
        await Movies.destroy( { where: { id } });
    }

} 