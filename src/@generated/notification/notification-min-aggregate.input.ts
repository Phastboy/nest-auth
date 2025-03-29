import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NotificationMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  userId?: true;

  @Field(() => Boolean, { nullable: true })
  type?: true;

  @Field(() => Boolean, { nullable: true })
  content?: true;

  @Field(() => Boolean, { nullable: true })
  isRead?: true;

  @Field(() => Boolean, { nullable: true })
  referenceId?: true;

  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
}
