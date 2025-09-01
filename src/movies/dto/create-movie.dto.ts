import { IsString, IsInt, IsOptional, Min } from 'class-validator';

export class MoviesCreateDto {
    @IsString()
    name: string;

    @IsString()
    synopsis: string;

    @IsInt()
    @Min(1)
    duration: number;

    @IsInt()
    genreId: number;

    @IsOptional()
    @IsInt({ each: true })
    actorsIds?: number[];
}
