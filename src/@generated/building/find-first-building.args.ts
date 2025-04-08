import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BuildingWhereInput } from './building-where.input';
import { Type } from 'class-transformer';
import { BuildingOrderByWithRelationInput } from './building-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BuildingWhereUniqueInput } from './building-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BuildingScalarFieldEnum } from './building-scalar-field.enum';

@ArgsType()
export class FindFirstBuildingArgs {

    @Field(() => BuildingWhereInput, {nullable:true})
    @Type(() => BuildingWhereInput)
    where?: BuildingWhereInput;

    @Field(() => [BuildingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BuildingOrderByWithRelationInput>;

    @Field(() => BuildingWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BuildingWhereUniqueInput, 'id' | 'name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BuildingScalarFieldEnum], {nullable:true})
    distinct?: Array<`${BuildingScalarFieldEnum}`>;
}
