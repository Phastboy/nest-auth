import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutEventsNestedInput } from '../user/user-update-one-required-without-events-nested.input';
import { PostUpdateOneRequiredWithoutEventNestedInput } from '../post/post-update-one-required-without-event-nested.input';
import { CategoryUpdateManyWithoutEventsNestedInput } from '../category/category-update-many-without-events-nested.input';
import { CommentUpdateManyWithoutEventNestedInput } from '../comment/comment-update-many-without-event-nested.input';
import { RSVPUpdateManyWithoutEventNestedInput } from '../rsvp/rsvp-update-many-without-event-nested.input';

@InputType()
export class EventUpdateWithoutLikesInput {
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

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => UserUpdateOneRequiredWithoutEventsNestedInput, {
    nullable: true,
  })
  user?: UserUpdateOneRequiredWithoutEventsNestedInput;

  @Field(() => PostUpdateOneRequiredWithoutEventNestedInput, { nullable: true })
  post?: PostUpdateOneRequiredWithoutEventNestedInput;

  @Field(() => CategoryUpdateManyWithoutEventsNestedInput, { nullable: true })
  categories?: CategoryUpdateManyWithoutEventsNestedInput;

  @Field(() => CommentUpdateManyWithoutEventNestedInput, { nullable: true })
  comments?: CommentUpdateManyWithoutEventNestedInput;

  @Field(() => RSVPUpdateManyWithoutEventNestedInput, { nullable: true })
  rsvps?: RSVPUpdateManyWithoutEventNestedInput;
}
