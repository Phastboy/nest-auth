import { registerEnumType } from '@nestjs/graphql';

export enum EventStatus {
  ONGOING = 'ONGOING',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  SCHEDULED = 'SCHEDULED',
  POSTPONED = 'POSTPONED',
  TBD = 'TBD',
}

registerEnumType(EventStatus, { name: 'EventStatus', description: undefined });
