import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CategoryCount {
  @Field(() => Int, { nullable: false })
  children?: number;

  @Field(() => Int, { nullable: false })
  posts?: number;

  @Field(() => Int, { nullable: false })
  events?: number;
}
