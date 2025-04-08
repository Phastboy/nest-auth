import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateNestedOneWithoutLikesInput } from '../post/post-create-nested-one-without-likes.input';
import { EventCreateNestedOneWithoutLikesInput } from '../event/event-create-nested-one-without-likes.input';

@InputType()
export class LikeCreateWithoutUserInput {
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => PostCreateNestedOneWithoutLikesInput, { nullable: true })
  post?: PostCreateNestedOneWithoutLikesInput;

  @Field(() => EventCreateNestedOneWithoutLikesInput, { nullable: true })
  event?: EventCreateNestedOneWithoutLikesInput;
}
