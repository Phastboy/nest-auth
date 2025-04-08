import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RoomWhereUniqueInput } from './room-where-unique.input';
import { Type } from 'class-transformer';
import { RoomUpdateWithoutBuildingInput } from './room-update-without-building.input';

@InputType()
export class RoomUpdateWithWhereUniqueWithoutBuildingInput {

    @Field(() => RoomWhereUniqueInput, {nullable:false})
    @Type(() => RoomWhereUniqueInput)
    where!: Prisma.AtLeast<RoomWhereUniqueInput, 'id'>;

    @Field(() => RoomUpdateWithoutBuildingInput, {nullable:false})
    @Type(() => RoomUpdateWithoutBuildingInput)
    data!: RoomUpdateWithoutBuildingInput;
}
