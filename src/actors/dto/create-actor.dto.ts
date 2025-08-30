import { IsString, IsDateString, IsOptional, IsInt } from 'class-validator';

export class ActorCreateDto {
    @IsString()
    name: string;

    @IsDateString()
    birthdate: Date;

    @IsOptional()
    @IsInt({ each: true })
    moviesIds?: number[];
}
