import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { PostUncheckedUpdateOneWithoutEventNestedInput } from '../post/post-unchecked-update-one-without-event-nested.input';
import { CategoryUncheckedUpdateManyWithoutEventsNestedInput } from '../category/category-unchecked-update-many-without-events-nested.input';
import { CommentUncheckedUpdateManyWithoutEventNestedInput } from '../comment/comment-unchecked-update-many-without-event-nested.input';
import { RSVPUncheckedUpdateManyWithoutEventNestedInput } from '../rsvp/rsvp-unchecked-update-many-without-event-nested.input';

@InputType()
export class EventUncheckedUpdateWithoutLikesInput {
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
  userId?: IntFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  shareAsPost?: BoolFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => PostUncheckedUpdateOneWithoutEventNestedInput, {
    nullable: true,
  })
  post?: PostUncheckedUpdateOneWithoutEventNestedInput;

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
}
