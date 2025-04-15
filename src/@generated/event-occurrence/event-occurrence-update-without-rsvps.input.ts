import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumEventStatusFieldUpdateOperationsInput } from '../prisma/enum-event-status-field-update-operations.input';
import { EnumEventModeFieldUpdateOperationsInput } from '../prisma/enum-event-mode-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EventUpdateOneRequiredWithoutOccurrencesNestedInput } from '../event/event-update-one-required-without-occurrences-nested.input';
import { BuildingUpdateOneWithoutEventOccurrenceNestedInput } from '../building/building-update-one-without-event-occurrence-nested.input';
import { RoomUpdateOneWithoutEventOccurrenceNestedInput } from '../room/room-update-one-without-event-occurrence-nested.input';
import { CommentUpdateManyWithoutEventOccurrenceNestedInput } from '../comment/comment-update-many-without-event-occurrence-nested.input';
import { LikeUpdateManyWithoutEventOccurrenceNestedInput } from '../like/like-update-many-without-event-occurrence-nested.input';

@InputType()
export class EventOccurrenceUpdateWithoutRsvpsInput {
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

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => EventUpdateOneRequiredWithoutOccurrencesNestedInput, {
    nullable: true,
  })
  event?: EventUpdateOneRequiredWithoutOccurrencesNestedInput;

  @Field(() => BuildingUpdateOneWithoutEventOccurrenceNestedInput, {
    nullable: true,
  })
  building?: BuildingUpdateOneWithoutEventOccurrenceNestedInput;

  @Field(() => RoomUpdateOneWithoutEventOccurrenceNestedInput, {
    nullable: true,
  })
  room?: RoomUpdateOneWithoutEventOccurrenceNestedInput;

  @Field(() => CommentUpdateManyWithoutEventOccurrenceNestedInput, {
    nullable: true,
  })
  comments?: CommentUpdateManyWithoutEventOccurrenceNestedInput;

  @Field(() => LikeUpdateManyWithoutEventOccurrenceNestedInput, {
    nullable: true,
  })
  likes?: LikeUpdateManyWithoutEventOccurrenceNestedInput;
}
