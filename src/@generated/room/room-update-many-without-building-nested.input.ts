import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomCreateWithoutBuildingInput } from './room-create-without-building.input';
import { Type } from 'class-transformer';
import { RoomCreateOrConnectWithoutBuildingInput } from './room-create-or-connect-without-building.input';
import { RoomUpsertWithWhereUniqueWithoutBuildingInput } from './room-upsert-with-where-unique-without-building.input';
import { RoomCreateManyBuildingInputEnvelope } from './room-create-many-building-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RoomWhereUniqueInput } from './room-where-unique.input';
import { RoomUpdateWithWhereUniqueWithoutBuildingInput } from './room-update-with-where-unique-without-building.input';
import { RoomUpdateManyWithWhereWithoutBuildingInput } from './room-update-many-with-where-without-building.input';
import { RoomScalarWhereInput } from './room-scalar-where.input';

@InputType()
export class RoomUpdateManyWithoutBuildingNestedInput {

    @Field(() => [RoomCreateWithoutBuildingInput], {nullable:true})
    @Type(() => RoomCreateWithoutBuildingInput)
    create?: Array<RoomCreateWithoutBuildingInput>;

    @Field(() => [RoomCreateOrConnectWithoutBuildingInput], {nullable:true})
    @Type(() => RoomCreateOrConnectWithoutBuildingInput)
    connectOrCreate?: Array<RoomCreateOrConnectWithoutBuildingInput>;

    @Field(() => [RoomUpsertWithWhereUniqueWithoutBuildingInput], {nullable:true})
    @Type(() => RoomUpsertWithWhereUniqueWithoutBuildingInput)
    upsert?: Array<RoomUpsertWithWhereUniqueWithoutBuildingInput>;

    @Field(() => RoomCreateManyBuildingInputEnvelope, {nullable:true})
    @Type(() => RoomCreateManyBuildingInputEnvelope)
    createMany?: RoomCreateManyBuildingInputEnvelope;

    @Field(() => [RoomWhereUniqueInput], {nullable:true})
    @Type(() => RoomWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RoomWhereUniqueInput, 'id'>>;

    @Field(() => [RoomWhereUniqueInput], {nullable:true})
    @Type(() => RoomWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RoomWhereUniqueInput, 'id'>>;

    @Field(() => [RoomWhereUniqueInput], {nullable:true})
    @Type(() => RoomWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RoomWhereUniqueInput, 'id'>>;

    @Field(() => [RoomWhereUniqueInput], {nullable:true})
    @Type(() => RoomWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RoomWhereUniqueInput, 'id'>>;

    @Field(() => [RoomUpdateWithWhereUniqueWithoutBuildingInput], {nullable:true})
    @Type(() => RoomUpdateWithWhereUniqueWithoutBuildingInput)
    update?: Array<RoomUpdateWithWhereUniqueWithoutBuildingInput>;

    @Field(() => [RoomUpdateManyWithWhereWithoutBuildingInput], {nullable:true})
    @Type(() => RoomUpdateManyWithWhereWithoutBuildingInput)
    updateMany?: Array<RoomUpdateManyWithWhereWithoutBuildingInput>;

    @Field(() => [RoomScalarWhereInput], {nullable:true})
    @Type(() => RoomScalarWhereInput)
    deleteMany?: Array<RoomScalarWhereInput>;
}
