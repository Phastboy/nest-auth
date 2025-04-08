import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutRoomInput } from './event-create-without-room.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutRoomInput } from './event-create-or-connect-without-room.input';
import { EventUpsertWithWhereUniqueWithoutRoomInput } from './event-upsert-with-where-unique-without-room.input';
import { EventCreateManyRoomInputEnvelope } from './event-create-many-room-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateWithWhereUniqueWithoutRoomInput } from './event-update-with-where-unique-without-room.input';
import { EventUpdateManyWithWhereWithoutRoomInput } from './event-update-many-with-where-without-room.input';
import { EventScalarWhereInput } from './event-scalar-where.input';

@InputType()
export class EventUncheckedUpdateManyWithoutRoomNestedInput {

    @Field(() => [EventCreateWithoutRoomInput], {nullable:true})
    @Type(() => EventCreateWithoutRoomInput)
    create?: Array<EventCreateWithoutRoomInput>;

    @Field(() => [EventCreateOrConnectWithoutRoomInput], {nullable:true})
    @Type(() => EventCreateOrConnectWithoutRoomInput)
    connectOrCreate?: Array<EventCreateOrConnectWithoutRoomInput>;

    @Field(() => [EventUpsertWithWhereUniqueWithoutRoomInput], {nullable:true})
    @Type(() => EventUpsertWithWhereUniqueWithoutRoomInput)
    upsert?: Array<EventUpsertWithWhereUniqueWithoutRoomInput>;

    @Field(() => EventCreateManyRoomInputEnvelope, {nullable:true})
    @Type(() => EventCreateManyRoomInputEnvelope)
    createMany?: EventCreateManyRoomInputEnvelope;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    set?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;

    @Field(() => [EventUpdateWithWhereUniqueWithoutRoomInput], {nullable:true})
    @Type(() => EventUpdateWithWhereUniqueWithoutRoomInput)
    update?: Array<EventUpdateWithWhereUniqueWithoutRoomInput>;

    @Field(() => [EventUpdateManyWithWhereWithoutRoomInput], {nullable:true})
    @Type(() => EventUpdateManyWithWhereWithoutRoomInput)
    updateMany?: Array<EventUpdateManyWithWhereWithoutRoomInput>;

    @Field(() => [EventScalarWhereInput], {nullable:true})
    @Type(() => EventScalarWhereInput)
    deleteMany?: Array<EventScalarWhereInput>;
}
