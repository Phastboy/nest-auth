import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { CategoryUncheckedUpdateManyWithoutEventsNestedInput } from '../category/category-unchecked-update-many-without-events-nested.input';
import { CommentUncheckedUpdateManyWithoutEventNestedInput } from '../comment/comment-unchecked-update-many-without-event-nested.input';
import { RSVPUncheckedUpdateManyWithoutEventNestedInput } from '../rsvp/rsvp-unchecked-update-many-without-event-nested.input';
import { LikeUncheckedUpdateManyWithoutEventNestedInput } from '../like/like-unchecked-update-many-without-event-nested.input';

@InputType()
export class EventUncheckedUpdateWithoutUserInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  id?: IntFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  description?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  location?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  startTime?: DateTimeFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  endTime?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  image?: NullableStringFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  postId?: IntFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => CategoryUncheckedUpdateManyWithoutEventsNestedInput, {
    nullable: true,
  })
  categories?: CategoryUncheckedUpdateManyWithoutEventsNestedInput;

  @Field(() => CommentUncheckedUpdateManyWithoutEventNestedInput, {
    nullable: true,
  })
  comments?: CommentUncheckedUpdateManyWithoutEventNestedInput;

  @Field(() => RSVPUncheckedUpdateManyWithoutEventNestedInput, {
    nullable: true,
  })
  rsvps?: RSVPUncheckedUpdateManyWithoutEventNestedInput;

  @Field(() => LikeUncheckedUpdateManyWithoutEventNestedInput, {
    nullable: true,
  })
  likes?: LikeUncheckedUpdateManyWithoutEventNestedInput;
}
