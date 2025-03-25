import { registerEnumType } from '@nestjs/graphql';

export enum PostScalarFieldEnum {
  id = 'id',
  content = 'content',
  userId = 'userId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(PostScalarFieldEnum, {
  name: 'PostScalarFieldEnum',
  description: undefined,
});
