import { registerEnumType } from '@nestjs/graphql';

export enum EventScalarFieldEnum {
  id = 'id',
  title = 'title',
  description = 'description',
  location = 'location',
  startTime = 'startTime',
  endTime = 'endTime',
  image = 'image',
  userId = 'userId',
  shareAsPost = 'shareAsPost',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(EventScalarFieldEnum, {
  name: 'EventScalarFieldEnum',
  description: undefined,
});
