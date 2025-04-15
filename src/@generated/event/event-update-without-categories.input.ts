import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumEventModeFieldUpdateOperationsInput } from '../prisma/enum-event-mode-field-update-operations.input';
import { EnumEventTypeFieldUpdateOperationsInput } from '../prisma/enum-event-type-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutEventsNestedInput } from '../user/user-update-one-required-without-events-nested.input';
import { PostUpdateOneWithoutEventNestedInput } from '../post/post-update-one-without-event-nested.input';
import { CommentUpdateManyWithoutEventNestedInput } from '../comment/comment-update-many-without-event-nested.input';
import { RSVPUpdateManyWithoutEventNestedInput } from '../rsvp/rsvp-update-many-without-event-nested.input';
import { LikeUpdateManyWithoutEventNestedInput } from '../like/like-update-many-without-event-nested.input';
import { EventOccurrenceUpdateManyWithoutEventNestedInput } from '../event-occurrence/event-occurrence-update-many-without-event-nested.input';

@InputType()
export class EventUpdateWithoutCategoriesInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  image?: NullableStringFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isRecurring?: BoolFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  recurrenceRule?: NullableStringFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPublic?: BoolFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  active?: BoolFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  shareAsPost?: BoolFieldUpdateOperationsInput;

  @Field(() => EnumEventModeFieldUpdateOperationsInput, { nullable: true })
  eventMode?: EnumEventModeFieldUpdateOperationsInput;

  @Field(() => EnumEventTypeFieldUpdateOperationsInput, { nullable: true })
  eventType?: EnumEventTypeFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  eventLink?: NullableStringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => UserUpdateOneRequiredWithoutEventsNestedInput, {
    nullable: true,
  })
  user?: UserUpdateOneRequiredWithoutEventsNestedInput;

  @Field(() => PostUpdateOneWithoutEventNestedInput, { nullable: true })
  post?: PostUpdateOneWithoutEventNestedInput;

  @Field(() => CommentUpdateManyWithoutEventNestedInput, { nullable: true })
  comments?: CommentUpdateManyWithoutEventNestedInput;

  @Field(() => RSVPUpdateManyWithoutEventNestedInput, { nullable: true })
  rsvps?: RSVPUpdateManyWithoutEventNestedInput;

  @Field(() => LikeUpdateManyWithoutEventNestedInput, { nullable: true })
  likes?: LikeUpdateManyWithoutEventNestedInput;

  @Field(() => EventOccurrenceUpdateManyWithoutEventNestedInput, {
    nullable: true,
  })
  occurrences?: EventOccurrenceUpdateManyWithoutEventNestedInput;
}
