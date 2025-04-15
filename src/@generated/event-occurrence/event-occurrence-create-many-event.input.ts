import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventStatus } from '../prisma/event-status.enum';
import { EventMode } from '../prisma/event-mode.enum';

@InputType()
export class EventOccurrenceCreateManyEventInput {
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
}
