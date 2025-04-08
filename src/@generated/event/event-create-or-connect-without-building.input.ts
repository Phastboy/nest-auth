import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutBuildingInput } from './event-create-without-building.input';

@InputType()
export class EventCreateOrConnectWithoutBuildingInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventCreateWithoutBuildingInput, {nullable:false})
    @Type(() => EventCreateWithoutBuildingInput)
    create!: EventCreateWithoutBuildingInput;
}
