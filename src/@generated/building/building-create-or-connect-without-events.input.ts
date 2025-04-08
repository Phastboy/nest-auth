import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BuildingWhereUniqueInput } from './building-where-unique.input';
import { Type } from 'class-transformer';
import { BuildingCreateWithoutEventsInput } from './building-create-without-events.input';

@InputType()
export class BuildingCreateOrConnectWithoutEventsInput {

    @Field(() => BuildingWhereUniqueInput, {nullable:false})
    @Type(() => BuildingWhereUniqueInput)
    where!: Prisma.AtLeast<BuildingWhereUniqueInput, 'id' | 'name'>;

    @Field(() => BuildingCreateWithoutEventsInput, {nullable:false})
    @Type(() => BuildingCreateWithoutEventsInput)
    create!: BuildingCreateWithoutEventsInput;
}
