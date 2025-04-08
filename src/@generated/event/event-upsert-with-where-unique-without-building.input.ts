import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventUpdateWithoutBuildingInput } from './event-update-without-building.input';
import { EventCreateWithoutBuildingInput } from './event-create-without-building.input';

@InputType()
export class EventUpsertWithWhereUniqueWithoutBuildingInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventUpdateWithoutBuildingInput, {nullable:false})
    @Type(() => EventUpdateWithoutBuildingInput)
    update!: EventUpdateWithoutBuildingInput;

    @Field(() => EventCreateWithoutBuildingInput, {nullable:false})
    @Type(() => EventCreateWithoutBuildingInput)
    create!: EventCreateWithoutBuildingInput;
}
