import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EventUpdateOneRequiredWithoutRsvpsNestedInput } from '../event/event-update-one-required-without-rsvps-nested.input';

@InputType()
export class RSVPUpdateWithoutUserInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  status?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => EventUpdateOneRequiredWithoutRsvpsNestedInput, {
    nullable: true,
  })
  event?: EventUpdateOneRequiredWithoutRsvpsNestedInput;
}
