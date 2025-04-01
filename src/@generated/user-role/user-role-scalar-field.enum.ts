import { registerEnumType } from '@nestjs/graphql';

export enum UserRoleScalarFieldEnum {
    userId = "userId",
    roleId = "roleId",
    createdAt = "createdAt"
}


registerEnumType(UserRoleScalarFieldEnum, { name: 'UserRoleScalarFieldEnum', description: undefined })
