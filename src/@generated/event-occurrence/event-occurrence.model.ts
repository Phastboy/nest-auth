import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventStatus } from '../prisma/event-status.enum';
import { EventMode } from '../prisma/event-mode.enum';
import { Event } from '../event/event.model';
import { Building } from '../building/building.model';
import { Room } from '../room/room.model';
import { RSVP } from '../rsvp/rsvp.model';
import { Comment } from '../comment/comment.model';
import { Like } from '../like/like.model';
import { EventOccurrenceCount } from './event-occurrence-count.output';

@ObjectType()
export class EventOccurrence {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  eventId!: number;

  @Field(() => Date, { nullable: false })
  startTime!: Date;

  @Field(() => Date, { nullable: false })
  endTime!: Date;

  @Field(() => EventStatus, { defaultValue: 'SCHEDULED', nullable: false })
  eventStatus!: `${EventStatus}`;

  @Field(() => EventMode, { defaultValue: 'PHYSICAL', nullable: false })
  eventMode!: `${EventMode}`;

  @Field(() => String, { nullable: true })
  eventLink!: string | null;

  @Field(() => Int, { nullable: true })
  buildingId!: number | null;

  @Field(() => Int, { nullable: true })
  roomId!: number | null;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => Event, { nullable: false })
  event?: Event;

  @Field(() => Building, { nullable: true })
  building?: Building | null;

  @Field(() => Room, { nullable: true })
  room?: Room | null;

  @Field(() => [RSVP], { nullable: true })
  rsvps?: Array<RSVP>;

  @Field(() => [Comment], { nullable: true })
  comments?: Array<Comment>;

  @Field(() => [Like], { nullable: true })
  likes?: Array<Like>;

  @Field(() => EventOccurrenceCount, { nullable: false })
  _count?: EventOccurrenceCount;
}
