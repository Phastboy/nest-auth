import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutRolesNestedInput } from '../user/user-update-one-required-without-roles-nested.input';

@InputType()
export class UserRoleUpdateWithoutRoleInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutRolesNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutRolesNestedInput;
}
