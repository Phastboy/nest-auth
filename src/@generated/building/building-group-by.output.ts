import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { BuildingCountAggregate } from './building-count-aggregate.output';
import { BuildingAvgAggregate } from './building-avg-aggregate.output';
import { BuildingSumAggregate } from './building-sum-aggregate.output';
import { BuildingMinAggregate } from './building-min-aggregate.output';
import { BuildingMaxAggregate } from './building-max-aggregate.output';

@ObjectType()
export class BuildingGroupBy {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Int, { nullable: true })
  number?: number;

  @Field(() => String, { nullable: true })
  road?: string;

  @Field(() => String, { nullable: true })
  landmark?: string;

  @Field(() => String, { nullable: true })
  area?: string;

  @Field(() => Float, { nullable: false })
  longitude!: number;

  @Field(() => Float, { nullable: false })
  latitude!: number;

  @Field(() => Int, { nullable: true })
  capacity?: number;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => BuildingCountAggregate, { nullable: true })
  _count?: BuildingCountAggregate;

  @Field(() => BuildingAvgAggregate, { nullable: true })
  _avg?: BuildingAvgAggregate;

  @Field(() => BuildingSumAggregate, { nullable: true })
  _sum?: BuildingSumAggregate;

  @Field(() => BuildingMinAggregate, { nullable: true })
  _min?: BuildingMinAggregate;

  @Field(() => BuildingMaxAggregate, { nullable: true })
  _max?: BuildingMaxAggregate;
}
