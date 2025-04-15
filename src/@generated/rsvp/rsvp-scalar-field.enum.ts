import { registerEnumType } from '@nestjs/graphql';

export enum RSVPScalarFieldEnum {
  id = 'id',
  userId = 'userId',
  eventId = 'eventId',
  status = 'status',
  createdAt = 'createdAt',
  eventOccurrenceId = 'eventOccurrenceId',
}

registerEnumType(RSVPScalarFieldEnum, {
  name: 'RSVPScalarFieldEnum',
  description: undefined,
});
