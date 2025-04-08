import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BuildingWhereUniqueInput } from './building-where-unique.input';
import { Type } from 'class-transformer';
import { BuildingCreateWithoutRoomsInput } from './building-create-without-rooms.input';

@InputType()
export class BuildingCreateOrConnectWithoutRoomsInput {

    @Field(() => BuildingWhereUniqueInput, {nullable:false})
    @Type(() => BuildingWhereUniqueInput)
    where!: Prisma.AtLeast<BuildingWhereUniqueInput, 'id' | 'name'>;

    @Field(() => BuildingCreateWithoutRoomsInput, {nullable:false})
    @Type(() => BuildingCreateWithoutRoomsInput)
    create!: BuildingCreateWithoutRoomsInput;
}
