import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PostCountAggregate } from './post-count-aggregate.output';
import { PostAvgAggregate } from './post-avg-aggregate.output';
import { PostSumAggregate } from './post-sum-aggregate.output';
import { PostMinAggregate } from './post-min-aggregate.output';
import { PostMaxAggregate } from './post-max-aggregate.output';

@ObjectType()
export class PostGroupBy {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  content!: string;

  @Field(() => String, { nullable: true })
  image?: string;

  @Field(() => Boolean, { nullable: false })
  isEvent!: boolean;

  @Field(() => Int, { nullable: true })
  eventId?: number;

  @Field(() => Int, { nullable: false })
  userId!: number;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => PostCountAggregate, { nullable: true })
  _count?: PostCountAggregate;

  @Field(() => PostAvgAggregate, { nullable: true })
  _avg?: PostAvgAggregate;

  @Field(() => PostSumAggregate, { nullable: true })
  _sum?: PostSumAggregate;

  @Field(() => PostMinAggregate, { nullable: true })
  _min?: PostMinAggregate;

  @Field(() => PostMaxAggregate, { nullable: true })
  _max?: PostMaxAggregate;
}
