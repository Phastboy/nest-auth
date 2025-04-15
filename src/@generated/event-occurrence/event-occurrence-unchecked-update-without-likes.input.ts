import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumEventStatusFieldUpdateOperationsInput } from '../prisma/enum-event-status-field-update-operations.input';
import { EnumEventModeFieldUpdateOperationsInput } from '../prisma/enum-event-mode-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { RSVPUncheckedUpdateManyWithoutEventOccurrenceNestedInput } from '../rsvp/rsvp-unchecked-update-many-without-event-occurrence-nested.input';
import { CommentUncheckedUpdateManyWithoutEventOccurrenceNestedInput } from '../comment/comment-unchecked-update-many-without-event-occurrence-nested.input';

@InputType()
export class EventOccurrenceUncheckedUpdateWithoutLikesInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  id?: IntFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  eventId?: IntFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  startTime?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  endTime?: DateTimeFieldUpdateOperationsInput;

  @Field(() => EnumEventStatusFieldUpdateOperationsInput, { nullable: true })
  eventStatus?: EnumEventStatusFieldUpdateOperationsInput;

  @Field(() => EnumEventModeFieldUpdateOperationsInput, { nullable: true })
  eventMode?: EnumEventModeFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  eventLink?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  buildingId?: NullableIntFieldUpdateOperationsInput;

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  roomId?: NullableIntFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => RSVPUncheckedUpdateManyWithoutEventOccurrenceNestedInput, {
    nullable: true,
  })
  rsvps?: RSVPUncheckedUpdateManyWithoutEventOccurrenceNestedInput;

  @Field(() => CommentUncheckedUpdateManyWithoutEventOccurrenceNestedInput, {
    nullable: true,
  })
  comments?: CommentUncheckedUpdateManyWithoutEventOccurrenceNestedInput;
}
