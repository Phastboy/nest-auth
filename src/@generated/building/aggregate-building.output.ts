import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BuildingCountAggregate } from './building-count-aggregate.output';
import { BuildingAvgAggregate } from './building-avg-aggregate.output';
import { BuildingSumAggregate } from './building-sum-aggregate.output';
import { BuildingMinAggregate } from './building-min-aggregate.output';
import { BuildingMaxAggregate } from './building-max-aggregate.output';

@ObjectType()
export class AggregateBuilding {

    @Field(() => BuildingCountAggregate, {nullable:true})
    _count?: BuildingCountAggregate;

    @Field(() => BuildingAvgAggregate, {nullable:true})
    _avg?: BuildingAvgAggregate;

    @Field(() => BuildingSumAggregate, {nullable:true})
    _sum?: BuildingSumAggregate;

    @Field(() => BuildingMinAggregate, {nullable:true})
    _min?: BuildingMinAggregate;

    @Field(() => BuildingMaxAggregate, {nullable:true})
    _max?: BuildingMaxAggregate;
}
