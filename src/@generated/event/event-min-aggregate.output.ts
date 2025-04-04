import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventStatus } from '../prisma/event-status.enum';

@ObjectType()
export class EventMinAggregate {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  location?: string;

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

  @Field(() => Int, { nullable: true })
  userId?: number;

  @Field(() => Boolean, { nullable: true })
  shareAsPost?: boolean;

  @Field(() => EventStatus, { nullable: true })
  status?: `${EventStatus}`;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
