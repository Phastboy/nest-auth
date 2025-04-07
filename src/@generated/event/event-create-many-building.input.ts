import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventStatus } from '../prisma/event-status.enum';
import { EventMode } from '../prisma/event-mode.enum';
import { EventType } from '../prisma/event-type.enum';

@InputType()
export class EventCreateManyBuildingInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => String, { nullable: false })
  location!: string;

  @Field(() => Date, { nullable: true })
  startTime?: Date | string;

  @Field(() => Date, { nullable: true })
  endTime?: Date | string;

  @Field(() => String, { nullable: true })
  image?: string;

  @Field(() => Boolean, { nullable: true })
  isRecurring?: boolean;

  @Field(() => String, { nullable: true })
  recurrenceRule?: string;

  @Field(() => Boolean, { nullable: true })
  isPublic?: boolean;

  @Field(() => Int, { nullable: false })
  userId!: number;

  @Field(() => Boolean, { nullable: true })
  shareAsPost?: boolean;

  @Field(() => EventStatus, { nullable: true })
  status?: `${EventStatus}`;

  @Field(() => EventMode, { nullable: true })
  eventMode?: `${EventMode}`;

  @Field(() => EventType, { nullable: true })
  eventType?: `${EventType}`;

  @Field(() => String, { nullable: true })
  eventLink?: string;

  @Field(() => Int, { nullable: true })
  roomId?: number;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
