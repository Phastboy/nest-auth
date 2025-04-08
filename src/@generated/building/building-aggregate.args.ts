import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BuildingWhereInput } from './building-where.input';
import { Type } from 'class-transformer';
import { BuildingOrderByWithRelationInput } from './building-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BuildingWhereUniqueInput } from './building-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BuildingCountAggregateInput } from './building-count-aggregate.input';
import { BuildingAvgAggregateInput } from './building-avg-aggregate.input';
import { BuildingSumAggregateInput } from './building-sum-aggregate.input';
import { BuildingMinAggregateInput } from './building-min-aggregate.input';
import { BuildingMaxAggregateInput } from './building-max-aggregate.input';

@ArgsType()
export class BuildingAggregateArgs {

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

    @Field(() => BuildingCountAggregateInput, {nullable:true})
    _count?: BuildingCountAggregateInput;

    @Field(() => BuildingAvgAggregateInput, {nullable:true})
    _avg?: BuildingAvgAggregateInput;

    @Field(() => BuildingSumAggregateInput, {nullable:true})
    _sum?: BuildingSumAggregateInput;

    @Field(() => BuildingMinAggregateInput, {nullable:true})
    _min?: BuildingMinAggregateInput;

    @Field(() => BuildingMaxAggregateInput, {nullable:true})
    _max?: BuildingMaxAggregateInput;
}
