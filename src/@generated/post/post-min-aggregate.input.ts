import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PostMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  content?: true;

  @Field(() => Boolean, { nullable: true })
  image?: true;

  @Field(() => Boolean, { nullable: true })
  isEvent?: true;

  @Field(() => Boolean, { nullable: true })
  eventId?: true;

  @Field(() => Boolean, { nullable: true })
  userId?: true;

  @Field(() => Boolean, { nullable: true })
  createdAt?: true;

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}
