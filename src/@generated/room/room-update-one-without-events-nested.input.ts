import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomCreateWithoutEventsInput } from './room-create-without-events.input';
import { Type } from 'class-transformer';
import { RoomCreateOrConnectWithoutEventsInput } from './room-create-or-connect-without-events.input';
import { RoomUpsertWithoutEventsInput } from './room-upsert-without-events.input';
import { RoomWhereInput } from './room-where.input';
import { Prisma } from '@prisma/client';
import { RoomWhereUniqueInput } from './room-where-unique.input';
import { RoomUpdateToOneWithWhereWithoutEventsInput } from './room-update-to-one-with-where-without-events.input';

@InputType()
export class RoomUpdateOneWithoutEventsNestedInput {

    @Field(() => RoomCreateWithoutEventsInput, {nullable:true})
    @Type(() => RoomCreateWithoutEventsInput)
    create?: RoomCreateWithoutEventsInput;

    @Field(() => RoomCreateOrConnectWithoutEventsInput, {nullable:true})
    @Type(() => RoomCreateOrConnectWithoutEventsInput)
    connectOrCreate?: RoomCreateOrConnectWithoutEventsInput;

    @Field(() => RoomUpsertWithoutEventsInput, {nullable:true})
    @Type(() => RoomUpsertWithoutEventsInput)
    upsert?: RoomUpsertWithoutEventsInput;

    @Field(() => RoomWhereInput, {nullable:true})
    @Type(() => RoomWhereInput)
    disconnect?: RoomWhereInput;

    @Field(() => RoomWhereInput, {nullable:true})
    @Type(() => RoomWhereInput)
    delete?: RoomWhereInput;

    @Field(() => RoomWhereUniqueInput, {nullable:true})
    @Type(() => RoomWhereUniqueInput)
    connect?: Prisma.AtLeast<RoomWhereUniqueInput, 'id'>;

    @Field(() => RoomUpdateToOneWithWhereWithoutEventsInput, {nullable:true})
    @Type(() => RoomUpdateToOneWithWhereWithoutEventsInput)
    update?: RoomUpdateToOneWithWhereWithoutEventsInput;
}
