import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RoomWhereUniqueInput } from './room-where-unique.input';
import { Type } from 'class-transformer';
import { RoomCreateWithoutBuildingInput } from './room-create-without-building.input';

@InputType()
export class RoomCreateOrConnectWithoutBuildingInput {

    @Field(() => RoomWhereUniqueInput, {nullable:false})
    @Type(() => RoomWhereUniqueInput)
    where!: Prisma.AtLeast<RoomWhereUniqueInput, 'id'>;

    @Field(() => RoomCreateWithoutBuildingInput, {nullable:false})
    @Type(() => RoomCreateWithoutBuildingInput)
    create!: RoomCreateWithoutBuildingInput;
}
