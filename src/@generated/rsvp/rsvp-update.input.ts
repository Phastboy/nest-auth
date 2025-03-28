import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutRsvpsNestedInput } from '../user/user-update-one-required-without-rsvps-nested.input';
import { EventUpdateOneRequiredWithoutRsvpsNestedInput } from '../event/event-update-one-required-without-rsvps-nested.input';

@InputType()
export class RSVPUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  status?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => UserUpdateOneRequiredWithoutRsvpsNestedInput, { nullable: true })
  user?: UserUpdateOneRequiredWithoutRsvpsNestedInput;

  @Field(() => EventUpdateOneRequiredWithoutRsvpsNestedInput, {
    nullable: true,
  })
  event?: EventUpdateOneRequiredWithoutRsvpsNestedInput;
}
