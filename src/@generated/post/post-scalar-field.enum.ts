import { registerEnumType } from '@nestjs/graphql';

export enum PostScalarFieldEnum {
  id = 'id',
  content = 'content',
  image = 'image',
  isEvent = 'isEvent',
  eventId = 'eventId',
  userId = 'userId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(PostScalarFieldEnum, {
  name: 'PostScalarFieldEnum',
  description: undefined,
});
