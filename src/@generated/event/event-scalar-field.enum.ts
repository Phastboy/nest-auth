import { registerEnumType } from '@nestjs/graphql';

export enum EventScalarFieldEnum {
  id = 'id',
  title = 'title',
  description = 'description',
  location = 'location',
  startTime = 'startTime',
  endTime = 'endTime',
  image = 'image',
  isRecurring = 'isRecurring',
  recurrenceRule = 'recurrenceRule',
  isPublic = 'isPublic',
  userId = 'userId',
  shareAsPost = 'shareAsPost',
  status = 'status',
  eventMode = 'eventMode',
  eventType = 'eventType',
  eventLink = 'eventLink',
  roomId = 'roomId',
  buildingId = 'buildingId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(EventScalarFieldEnum, {
  name: 'EventScalarFieldEnum',
  description: undefined,
});
