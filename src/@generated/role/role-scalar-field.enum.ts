import { registerEnumType } from '@nestjs/graphql';

export enum RoleScalarFieldEnum {
  id = 'id',
  name = 'name',
  description = 'description',
  level = 'level',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(RoleScalarFieldEnum, {
  name: 'RoleScalarFieldEnum',
  description: undefined,
});
