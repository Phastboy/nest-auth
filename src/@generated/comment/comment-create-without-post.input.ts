import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCommentsInput } from '../user/user-create-nested-one-without-comments.input';
import { EventCreateNestedOneWithoutCommentsInput } from '../event/event-create-nested-one-without-comments.input';
import { CommentCreateNestedOneWithoutRepliesInput } from './comment-create-nested-one-without-replies.input';
import { CommentCreateNestedManyWithoutParentInput } from './comment-create-nested-many-without-parent.input';

@InputType()
export class CommentCreateWithoutPostInput {
  @Field(() => String, { nullable: false })
  content!: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => UserCreateNestedOneWithoutCommentsInput, { nullable: false })
  user!: UserCreateNestedOneWithoutCommentsInput;

  @Field(() => EventCreateNestedOneWithoutCommentsInput, { nullable: true })
  event?: EventCreateNestedOneWithoutCommentsInput;

  @Field(() => CommentCreateNestedOneWithoutRepliesInput, { nullable: true })
  parent?: CommentCreateNestedOneWithoutRepliesInput;

  @Field(() => CommentCreateNestedManyWithoutParentInput, { nullable: true })
  replies?: CommentCreateNestedManyWithoutParentInput;
}
