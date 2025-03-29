import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EventMinAggregate {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  location?: string;

  @Field(() => Date, { nullable: true })
  startTime?: Date | string;

  @Field(() => Date, { nullable: true })
  endTime?: Date | string;

  @Field(() => String, { nullable: true })
  image?: string;

  @Field(() => Int, { nullable: true })
  userId?: number;

  @Field(() => Boolean, { nullable: true })
  shareAsPost?: boolean;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
