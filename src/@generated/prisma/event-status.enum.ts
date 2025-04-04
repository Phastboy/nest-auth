import { registerEnumType } from '@nestjs/graphql';

export enum EventStatus {
  ONGOING = 'ONGOING',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  SHEDULED = 'SHEDULED',
  POSTPONED = 'POSTPONED',
}

registerEnumType(EventStatus, { name: 'EventStatus', description: undefined });
