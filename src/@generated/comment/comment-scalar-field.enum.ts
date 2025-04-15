import { registerEnumType } from '@nestjs/graphql';

export enum CommentScalarFieldEnum {
  id = 'id',
  content = 'content',
  userId = 'userId',
  postId = 'postId',
  eventId = 'eventId',
  parentId = 'parentId',
  createdAt = 'createdAt',
  eventOccurrenceId = 'eventOccurrenceId',
}

registerEnumType(CommentScalarFieldEnum, {
  name: 'CommentScalarFieldEnum',
  description: undefined,
});
