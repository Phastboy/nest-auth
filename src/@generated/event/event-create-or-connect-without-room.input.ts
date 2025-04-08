import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutRoomInput } from './event-create-without-room.input';

@InputType()
export class EventCreateOrConnectWithoutRoomInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventCreateWithoutRoomInput, {nullable:false})
    @Type(() => EventCreateWithoutRoomInput)
    create!: EventCreateWithoutRoomInput;
}
