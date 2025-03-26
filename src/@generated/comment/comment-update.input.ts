import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutCommentsNestedInput } from '../user/user-update-one-required-without-comments-nested.input';
import { PostUpdateOneWithoutCommentsNestedInput } from '../post/post-update-one-without-comments-nested.input';
import { EventUpdateOneWithoutCommentsNestedInput } from '../event/event-update-one-without-comments-nested.input';
import { CommentUpdateOneWithoutRepliesNestedInput } from './comment-update-one-without-replies-nested.input';
import { CommentUpdateManyWithoutParentNestedInput } from './comment-update-many-without-parent-nested.input';

@InputType()
export class CommentUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  content?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => UserUpdateOneRequiredWithoutCommentsNestedInput, {
    nullable: true,
  })
  user?: UserUpdateOneRequiredWithoutCommentsNestedInput;

  @Field(() => PostUpdateOneWithoutCommentsNestedInput, { nullable: true })
  post?: PostUpdateOneWithoutCommentsNestedInput;

  @Field(() => EventUpdateOneWithoutCommentsNestedInput, { nullable: true })
  event?: EventUpdateOneWithoutCommentsNestedInput;

  @Field(() => CommentUpdateOneWithoutRepliesNestedInput, { nullable: true })
  parent?: CommentUpdateOneWithoutRepliesNestedInput;

  @Field(() => CommentUpdateManyWithoutParentNestedInput, { nullable: true })
  replies?: CommentUpdateManyWithoutParentNestedInput;
}
