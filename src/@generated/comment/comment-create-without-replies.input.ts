import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCommentsInput } from '../user/user-create-nested-one-without-comments.input';
import { PostCreateNestedOneWithoutCommentsInput } from '../post/post-create-nested-one-without-comments.input';
import { EventCreateNestedOneWithoutCommentsInput } from '../event/event-create-nested-one-without-comments.input';
import { CommentCreateNestedOneWithoutRepliesInput } from './comment-create-nested-one-without-replies.input';

@InputType()
export class CommentCreateWithoutRepliesInput {
  @Field(() => String, { nullable: false })
  content!: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => UserCreateNestedOneWithoutCommentsInput, { nullable: false })
  user!: UserCreateNestedOneWithoutCommentsInput;

  @Field(() => PostCreateNestedOneWithoutCommentsInput, { nullable: true })
  post?: PostCreateNestedOneWithoutCommentsInput;

  @Field(() => EventCreateNestedOneWithoutCommentsInput, { nullable: true })
  event?: EventCreateNestedOneWithoutCommentsInput;

  @Field(() => CommentCreateNestedOneWithoutRepliesInput, { nullable: true })
  parent?: CommentCreateNestedOneWithoutRepliesInput;
}
