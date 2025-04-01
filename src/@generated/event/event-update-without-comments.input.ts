import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { UserUpdateOneRequiredWithoutEventsNestedInput } from '../user/user-update-one-required-without-events-nested.input';
import { PostUpdateOneWithoutEventNestedInput } from '../post/post-update-one-without-event-nested.input';
import { CategoryUpdateManyWithoutEventsNestedInput } from '../category/category-update-many-without-events-nested.input';
import { RSVPUpdateManyWithoutEventNestedInput } from '../rsvp/rsvp-update-many-without-event-nested.input';
import { LikeUpdateManyWithoutEventNestedInput } from '../like/like-update-many-without-event-nested.input';

@InputType()
export class EventUpdateWithoutCommentsInput {
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

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  shareAsPost?: BoolFieldUpdateOperationsInput;

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

  @Field(() => CategoryUpdateManyWithoutEventsNestedInput, { nullable: true })
  categories?: CategoryUpdateManyWithoutEventsNestedInput;

  @Field(() => RSVPUpdateManyWithoutEventNestedInput, { nullable: true })
  rsvps?: RSVPUpdateManyWithoutEventNestedInput;

  @Field(() => LikeUpdateManyWithoutEventNestedInput, { nullable: true })
  likes?: LikeUpdateManyWithoutEventNestedInput;
}
