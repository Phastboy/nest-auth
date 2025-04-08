import { registerEnumType } from '@nestjs/graphql';

export enum EventType {
  LECTURE = 'LECTURE',
  MEETING = 'MEETING',
  WORKSHOP = 'WORKSHOP',
  SEMINAR = 'SEMINAR',
  CONFERENCE = 'CONFERENCE',
  WEBINAR = 'WEBINAR',
  SOCIAL = 'SOCIAL',
  OTHER = 'OTHER',
}

registerEnumType(EventType, { name: 'EventType', description: undefined });
