import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PostCount {
  @Field(() => Int, { nullable: false })
  categories?: number;

  @Field(() => Int, { nullable: false })
  comments?: number;

  @Field(() => Int, { nullable: false })
  likes?: number;
}
