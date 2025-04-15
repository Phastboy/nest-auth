import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EventOccurrenceUpdateManyWithoutRoomNestedInput } from '../event-occurrence/event-occurrence-update-many-without-room-nested.input';

@InputType()
export class RoomUpdateWithoutBuildingInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  capacity?: NullableIntFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => EventOccurrenceUpdateManyWithoutRoomNestedInput, {
    nullable: true,
  })
  EventOccurrence?: EventOccurrenceUpdateManyWithoutRoomNestedInput;
}
