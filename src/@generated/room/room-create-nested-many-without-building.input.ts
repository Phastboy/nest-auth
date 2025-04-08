import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomCreateWithoutBuildingInput } from './room-create-without-building.input';
import { Type } from 'class-transformer';
import { RoomCreateOrConnectWithoutBuildingInput } from './room-create-or-connect-without-building.input';
import { RoomCreateManyBuildingInputEnvelope } from './room-create-many-building-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RoomWhereUniqueInput } from './room-where-unique.input';

@InputType()
export class RoomCreateNestedManyWithoutBuildingInput {

    @Field(() => [RoomCreateWithoutBuildingInput], {nullable:true})
    @Type(() => RoomCreateWithoutBuildingInput)
    create?: Array<RoomCreateWithoutBuildingInput>;

    @Field(() => [RoomCreateOrConnectWithoutBuildingInput], {nullable:true})
    @Type(() => RoomCreateOrConnectWithoutBuildingInput)
    connectOrCreate?: Array<RoomCreateOrConnectWithoutBuildingInput>;

    @Field(() => RoomCreateManyBuildingInputEnvelope, {nullable:true})
    @Type(() => RoomCreateManyBuildingInputEnvelope)
    createMany?: RoomCreateManyBuildingInputEnvelope;

    @Field(() => [RoomWhereUniqueInput], {nullable:true})
    @Type(() => RoomWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RoomWhereUniqueInput, 'id'>>;
}
