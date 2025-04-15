import { registerEnumType } from '@nestjs/graphql';

export enum EventScalarFieldEnum {
  id = 'id',
  title = 'title',
  description = 'description',
  image = 'image',
  isRecurring = 'isRecurring',
  recurrenceRule = 'recurrenceRule',
  isPublic = 'isPublic',
  active = 'active',
  userId = 'userId',
  shareAsPost = 'shareAsPost',
  eventMode = 'eventMode',
  eventType = 'eventType',
  eventLink = 'eventLink',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(EventScalarFieldEnum, {
  name: 'EventScalarFieldEnum',
  description: undefined,
});
