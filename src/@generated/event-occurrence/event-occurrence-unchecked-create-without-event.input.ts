import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventStatus } from '../prisma/event-status.enum';
import { EventMode } from '../prisma/event-mode.enum';
import { RSVPUncheckedCreateNestedManyWithoutEventOccurrenceInput } from '../rsvp/rsvp-unchecked-create-nested-many-without-event-occurrence.input';
import { CommentUncheckedCreateNestedManyWithoutEventOccurrenceInput } from '../comment/comment-unchecked-create-nested-many-without-event-occurrence.input';
import { LikeUncheckedCreateNestedManyWithoutEventOccurrenceInput } from '../like/like-unchecked-create-nested-many-without-event-occurrence.input';

@InputType()
export class EventOccurrenceUncheckedCreateWithoutEventInput {
  @Field(() => Int, { nullable: true })
  id?: number;

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

  @Field(() => Int, { nullable: true })
  buildingId?: number;

  @Field(() => Int, { nullable: true })
  roomId?: number;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => RSVPUncheckedCreateNestedManyWithoutEventOccurrenceInput, {
    nullable: true,
  })
  rsvps?: RSVPUncheckedCreateNestedManyWithoutEventOccurrenceInput;

  @Field(() => CommentUncheckedCreateNestedManyWithoutEventOccurrenceInput, {
    nullable: true,
  })
  comments?: CommentUncheckedCreateNestedManyWithoutEventOccurrenceInput;

  @Field(() => LikeUncheckedCreateNestedManyWithoutEventOccurrenceInput, {
    nullable: true,
  })
  likes?: LikeUncheckedCreateNestedManyWithoutEventOccurrenceInput;
}
