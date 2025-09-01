import { ActorDto } from "./dto/actor.dto";
import Actor from "./entities/actor.entity";
import Movies from "src/movies/entities/movie.entity";
import { NotFoundException } from "@nestjs/common";
import { ActorCreateDto } from "./dto/create-actor.dto";
import { ActorUpdateDto } from "./dto/update-actor.dto";
import { ActorSimpleDto } from "./dto/actor-simple.dto";


export class ActorRepository{

    async create(actorCreated : ActorCreateDto): Promise<ActorDto> {
        const { moviesIds, ...actorData } = actorCreated;

        const created = await Actor.create({ ...actorData });

        if (moviesIds && moviesIds.length > 0) {
            await created.$set("movies", moviesIds);
            await created.reload({ include: [Movies] });
        }

        return ActorDto.fromEntity(created);
    }


    async update(id: number, actorUpdated: ActorUpdateDto): Promise<ActorSimpleDto> {
        const actor = await Actor.findByPk(id);

        if (!actor) {
            throw new NotFoundException("Actor not found"); 
        }

        await actor.update({
            name: actorUpdated.name,
            birthdate: actorUpdated.birthdate
        });

        if (actorUpdated.moviesIds) {
            await actor.$set('movies', actorUpdated.moviesIds); 
        }
        await actor.reload({ include: [Movies] });

        return ActorDto.fromEntity(actor);
    }


    async findAll(): Promise<ActorDto[]>{
        const actors = await Actor.findAll({ include: [Movies] });
        return actors.map(actors => ActorDto.fromEntity(actors));
    }

    async findOne(id : number): Promise<ActorDto | null>{
        const actor = await Actor.findByPk(id, { include: [Movies] });
        return actor ? ActorDto.fromEntity(actor) : null;
    }

    async remove(id: number): Promise<void>{
        await Actor.destroy( { where: { id } });
    }

}