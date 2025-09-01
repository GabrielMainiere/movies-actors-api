import Genre from "../entities/genre.entity";

export class GenreDto {
    id: number;
    name: string;
    links?: { rel: string; href: string }[];

    constructor(id: number, name: string, links?: { rel: string; href: string }[]) {
        this.id = id;
        this.name = name;
        if (links) this.links = links;
    }

    static fromEntity(genre: Genre): GenreDto {
        const links = [
            { rel: 'self', href: `/genres/${genre.id}` },
            { rel: 'update', href: `/genres/${genre.id}` },
            { rel: 'delete', href: `/genres/${genre.id}` }
        ];
        return new GenreDto(genre.id, genre.name, links);
    }
}
