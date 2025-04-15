import { registerEnumType } from '@nestjs/graphql';

export enum EventOccurrenceScalarFieldEnum {
  id = 'id',
  eventId = 'eventId',
  startTime = 'startTime',
  endTime = 'endTime',
  eventStatus = 'eventStatus',
  eventMode = 'eventMode',
  eventLink = 'eventLink',
  buildingId = 'buildingId',
  roomId = 'roomId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(EventOccurrenceScalarFieldEnum, {
  name: 'EventOccurrenceScalarFieldEnum',
  description: undefined,
});
