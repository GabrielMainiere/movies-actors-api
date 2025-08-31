import Actor from "../entities/actor.entity";

export class ActorSimpleDto {
    id: number;
    name: string;
    birthdate: Date;

    constructor(id: number, name: string, birthdate: Date) {
        this.id = id;
        this.name = name;
        this.birthdate = birthdate;
    }

    static fromEntity(actor: Actor): ActorSimpleDto {
        return new ActorSimpleDto(actor.id, actor.name, actor.birthdate);
    }
}
