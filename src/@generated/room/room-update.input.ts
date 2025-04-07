import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BuildingUpdateOneRequiredWithoutRoomsNestedInput } from '../building/building-update-one-required-without-rooms-nested.input';
import { EventUpdateManyWithoutRoomNestedInput } from '../event/event-update-many-without-room-nested.input';

@InputType()
export class RoomUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  capacity?: NullableIntFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => BuildingUpdateOneRequiredWithoutRoomsNestedInput, {
    nullable: true,
  })
  building?: BuildingUpdateOneRequiredWithoutRoomsNestedInput;

  @Field(() => EventUpdateManyWithoutRoomNestedInput, { nullable: true })
  events?: EventUpdateManyWithoutRoomNestedInput;
}
