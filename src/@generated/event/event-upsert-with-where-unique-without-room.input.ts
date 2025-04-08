import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventUpdateWithoutRoomInput } from './event-update-without-room.input';
import { EventCreateWithoutRoomInput } from './event-create-without-room.input';

@InputType()
export class EventUpsertWithWhereUniqueWithoutRoomInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventUpdateWithoutRoomInput, {nullable:false})
    @Type(() => EventUpdateWithoutRoomInput)
    update!: EventUpdateWithoutRoomInput;

    @Field(() => EventCreateWithoutRoomInput, {nullable:false})
    @Type(() => EventCreateWithoutRoomInput)
    create!: EventCreateWithoutRoomInput;
}
