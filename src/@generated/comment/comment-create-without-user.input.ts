import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateNestedOneWithoutCommentsInput } from '../post/post-create-nested-one-without-comments.input';
import { EventCreateNestedOneWithoutCommentsInput } from '../event/event-create-nested-one-without-comments.input';
import { CommentCreateNestedOneWithoutRepliesInput } from './comment-create-nested-one-without-replies.input';
import { CommentCreateNestedManyWithoutParentInput } from './comment-create-nested-many-without-parent.input';

@InputType()
export class CommentCreateWithoutUserInput {
  @Field(() => String, { nullable: false })
  content!: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => PostCreateNestedOneWithoutCommentsInput, { nullable: true })
  post?: PostCreateNestedOneWithoutCommentsInput;

  @Field(() => EventCreateNestedOneWithoutCommentsInput, { nullable: true })
  event?: EventCreateNestedOneWithoutCommentsInput;

  @Field(() => CommentCreateNestedOneWithoutRepliesInput, { nullable: true })
  parent?: CommentCreateNestedOneWithoutRepliesInput;

  @Field(() => CommentCreateNestedManyWithoutParentInput, { nullable: true })
  replies?: CommentCreateNestedManyWithoutParentInput;
}
