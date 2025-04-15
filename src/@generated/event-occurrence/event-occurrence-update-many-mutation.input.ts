import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumEventStatusFieldUpdateOperationsInput } from '../prisma/enum-event-status-field-update-operations.input';
import { EnumEventModeFieldUpdateOperationsInput } from '../prisma/enum-event-mode-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';

@InputType()
export class EventOccurrenceUpdateManyMutationInput {
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
}
