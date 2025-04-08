import { registerEnumType } from '@nestjs/graphql';

export enum EventScalarFieldEnum {
  id = 'id',
  title = 'title',
  description = 'description',
  startTime = 'startTime',
  endTime = 'endTime',
  image = 'image',
  isRecurring = 'isRecurring',
  recurrenceRule = 'recurrenceRule',
  isPublic = 'isPublic',
  userId = 'userId',
  shareAsPost = 'shareAsPost',
  eventStatus = 'eventStatus',
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
