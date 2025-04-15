import { registerEnumType } from '@nestjs/graphql';

export enum LikeScalarFieldEnum {
  id = 'id',
  userId = 'userId',
  postId = 'postId',
  eventId = 'eventId',
  createdAt = 'createdAt',
  eventOccurrenceId = 'eventOccurrenceId',
}

registerEnumType(LikeScalarFieldEnum, {
  name: 'LikeScalarFieldEnum',
  description: undefined,
});
