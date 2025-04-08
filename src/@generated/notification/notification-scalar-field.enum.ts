import { registerEnumType } from '@nestjs/graphql';

export enum NotificationScalarFieldEnum {
  id = 'id',
  userId = 'userId',
  type = 'type',
  content = 'content',
  isRead = 'isRead',
  referenceId = 'referenceId',
  createdAt = 'createdAt',
}

registerEnumType(NotificationScalarFieldEnum, {
  name: 'NotificationScalarFieldEnum',
  description: undefined,
});
