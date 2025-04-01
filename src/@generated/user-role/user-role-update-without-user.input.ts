import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { RoleUpdateOneRequiredWithoutUsersNestedInput } from '../role/role-update-one-required-without-users-nested.input';

@InputType()
export class UserRoleUpdateWithoutUserInput {
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => RoleUpdateOneRequiredWithoutUsersNestedInput, { nullable: true })
  role?: RoleUpdateOneRequiredWithoutUsersNestedInput;
}
