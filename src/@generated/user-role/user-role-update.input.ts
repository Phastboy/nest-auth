import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutRolesNestedInput } from '../user/user-update-one-required-without-roles-nested.input';
import { RoleUpdateOneRequiredWithoutUsersNestedInput } from '../role/role-update-one-required-without-users-nested.input';

@InputType()
export class UserRoleUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutRolesNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutRolesNestedInput;

    @Field(() => RoleUpdateOneRequiredWithoutUsersNestedInput, {nullable:true})
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput;
}
