import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CategoryUncheckedUpdateManyWithoutPostsNestedInput } from '../category/category-unchecked-update-many-without-posts-nested.input';
import { CommentUncheckedUpdateManyWithoutPostNestedInput } from '../comment/comment-unchecked-update-many-without-post-nested.input';
import { LikeUncheckedUpdateManyWithoutPostNestedInput } from '../like/like-unchecked-update-many-without-post-nested.input';
import { EventUncheckedUpdateOneWithoutPostNestedInput } from '../event/event-unchecked-update-one-without-post-nested.input';

@InputType()
export class PostUncheckedUpdateWithoutUserInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  id?: IntFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  content?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  image?: NullableStringFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isEvent?: BoolFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => CategoryUncheckedUpdateManyWithoutPostsNestedInput, {
    nullable: true,
  })
  categories?: CategoryUncheckedUpdateManyWithoutPostsNestedInput;

  @Field(() => CommentUncheckedUpdateManyWithoutPostNestedInput, {
    nullable: true,
  })
  comments?: CommentUncheckedUpdateManyWithoutPostNestedInput;

  @Field(() => LikeUncheckedUpdateManyWithoutPostNestedInput, {
    nullable: true,
  })
  likes?: LikeUncheckedUpdateManyWithoutPostNestedInput;

  @Field(() => EventUncheckedUpdateOneWithoutPostNestedInput, {
    nullable: true,
  })
  event?: EventUncheckedUpdateOneWithoutPostNestedInput;
}
