import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BuildingCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  name!: number;

  @Field(() => Int, { nullable: false })
  number!: number;

  @Field(() => Int, { nullable: false })
  road!: number;

  @Field(() => Int, { nullable: false })
  landmark!: number;

  @Field(() => Int, { nullable: false })
  area!: number;

  @Field(() => Int, { nullable: false })
  longitude!: number;

  @Field(() => Int, { nullable: false })
  latitude!: number;

  @Field(() => Int, { nullable: false })
  capacity!: number;

  @Field(() => Int, { nullable: false })
  createdAt!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
