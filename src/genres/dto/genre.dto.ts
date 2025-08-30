import Genre from "../entities/genre.entity";

export class GenreDto {
    id: number;
    name: string;
    
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    static fromEntity(genre: Genre): GenreDto {
        return new GenreDto(genre.id, genre.name);
    }
}
