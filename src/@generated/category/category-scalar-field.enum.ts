import { registerEnumType } from '@nestjs/graphql';

export enum CategoryScalarFieldEnum {
  id = 'id',
  name = 'name',
  slug = 'slug',
  parentId = 'parentId',
  createdAt = 'createdAt',
}

registerEnumType(CategoryScalarFieldEnum, {
  name: 'CategoryScalarFieldEnum',
  description: undefined,
});
