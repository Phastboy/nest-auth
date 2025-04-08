import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutRoomInput } from './event-create-without-room.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutRoomInput } from './event-create-or-connect-without-room.input';
import { EventCreateManyRoomInputEnvelope } from './event-create-many-room-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';

@InputType()
export class EventUncheckedCreateNestedManyWithoutRoomInput {

    @Field(() => [EventCreateWithoutRoomInput], {nullable:true})
    @Type(() => EventCreateWithoutRoomInput)
    create?: Array<EventCreateWithoutRoomInput>;

    @Field(() => [EventCreateOrConnectWithoutRoomInput], {nullable:true})
    @Type(() => EventCreateOrConnectWithoutRoomInput)
    connectOrCreate?: Array<EventCreateOrConnectWithoutRoomInput>;

    @Field(() => EventCreateManyRoomInputEnvelope, {nullable:true})
    @Type(() => EventCreateManyRoomInputEnvelope)
    createMany?: EventCreateManyRoomInputEnvelope;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
}
