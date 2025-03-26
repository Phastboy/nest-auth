import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutNotificationsNestedInput } from '../user/user-update-one-required-without-notifications-nested.input';

@InputType()
export class NotificationUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  type?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  content?: StringFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isRead?: BoolFieldUpdateOperationsInput;

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  referenceId?: NullableIntFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => UserUpdateOneRequiredWithoutNotificationsNestedInput, {
    nullable: true,
  })
  user?: UserUpdateOneRequiredWithoutNotificationsNestedInput;
}
