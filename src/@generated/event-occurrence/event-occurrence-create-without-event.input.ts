import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventStatus } from '../prisma/event-status.enum';
import { EventMode } from '../prisma/event-mode.enum';
import { BuildingCreateNestedOneWithoutEventOccurrenceInput } from '../building/building-create-nested-one-without-event-occurrence.input';
import { RoomCreateNestedOneWithoutEventOccurrenceInput } from '../room/room-create-nested-one-without-event-occurrence.input';
import { RSVPCreateNestedManyWithoutEventOccurrenceInput } from '../rsvp/rsvp-create-nested-many-without-event-occurrence.input';
import { CommentCreateNestedManyWithoutEventOccurrenceInput } from '../comment/comment-create-nested-many-without-event-occurrence.input';
import { LikeCreateNestedManyWithoutEventOccurrenceInput } from '../like/like-create-nested-many-without-event-occurrence.input';

@InputType()
export class EventOccurrenceCreateWithoutEventInput {
  @Field(() => Date, { nullable: false })
  startTime!: Date | string;

  @Field(() => Date, { nullable: false })
  endTime!: Date | string;

  @Field(() => EventStatus, { nullable: true })
  eventStatus?: `${EventStatus}`;

  @Field(() => EventMode, { nullable: true })
  eventMode?: `${EventMode}`;

  @Field(() => String, { nullable: true })
  eventLink?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => BuildingCreateNestedOneWithoutEventOccurrenceInput, {
    nullable: true,
  })
  building?: BuildingCreateNestedOneWithoutEventOccurrenceInput;

  @Field(() => RoomCreateNestedOneWithoutEventOccurrenceInput, {
    nullable: true,
  })
  room?: RoomCreateNestedOneWithoutEventOccurrenceInput;

  @Field(() => RSVPCreateNestedManyWithoutEventOccurrenceInput, {
    nullable: true,
  })
  rsvps?: RSVPCreateNestedManyWithoutEventOccurrenceInput;

  @Field(() => CommentCreateNestedManyWithoutEventOccurrenceInput, {
    nullable: true,
  })
  comments?: CommentCreateNestedManyWithoutEventOccurrenceInput;

  @Field(() => LikeCreateNestedManyWithoutEventOccurrenceInput, {
    nullable: true,
  })
  likes?: LikeCreateNestedManyWithoutEventOccurrenceInput;
}
