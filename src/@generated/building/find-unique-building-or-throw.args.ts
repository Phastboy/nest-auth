import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BuildingWhereUniqueInput } from './building-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueBuildingOrThrowArgs {

    @Field(() => BuildingWhereUniqueInput, {nullable:false})
    @Type(() => BuildingWhereUniqueInput)
    where!: Prisma.AtLeast<BuildingWhereUniqueInput, 'id' | 'name'>;
}
