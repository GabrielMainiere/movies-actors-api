import { Injectable } from "@nestjs/common";
import { GenreCreateDto } from "./dto/create-genre.dto";
import { GenreDto } from "./dto/genre.dto";
import { UpdateGenreDto } from "./dto/update-genre.dto";
import Genre from "./entities/genre.entity";

@Injectable()
export class GenreRepository{

    async create(genreCreated: GenreCreateDto): Promise<GenreDto> {
        const created = await Genre.create({ ...genreCreated });
        return GenreDto.fromEntity(created);
    }

    async update(id: number, genreUpdated: UpdateGenreDto): Promise<GenreDto> {
        const genre = await Genre.findByPk(id);

        if (!genre) {
            throw new Error("Genre not found");
        }

        await genre.update({
            name: genreUpdated.name
        });

        return GenreDto.fromEntity(genre);
    }

    async findAll(): Promise<GenreDto[]>{
        const genres = await Genre.findAll();
        return genres.map(GenreDto.fromEntity);
    }

    async findOne(id: number): Promise<GenreDto | null> {
        const genre = await Genre.findByPk(id);
        return genre ? GenreDto.fromEntity(genre) : null;
    }

    async remove(id: number): Promise<void> {
        await Genre.destroy({ where: { id } });
    }
}