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
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(EventScalarFieldEnum, {
  name: 'EventScalarFieldEnum',
  description: undefined,
});
