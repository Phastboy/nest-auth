import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutRsvpsNestedInput } from '../user/user-update-one-required-without-rsvps-nested.input';
import { EventOccurrenceUpdateOneWithoutRsvpsNestedInput } from '../event-occurrence/event-occurrence-update-one-without-rsvps-nested.input';

@InputType()
export class RSVPUpdateWithoutEventInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  status?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => UserUpdateOneRequiredWithoutRsvpsNestedInput, { nullable: true })
  user?: UserUpdateOneRequiredWithoutRsvpsNestedInput;

  @Field(() => EventOccurrenceUpdateOneWithoutRsvpsNestedInput, {
    nullable: true,
  })
  EventOccurrence?: EventOccurrenceUpdateOneWithoutRsvpsNestedInput;
}
