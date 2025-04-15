import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventOccurrenceWhereUniqueInput } from './event-occurrence-where-unique.input';
import { Type } from 'class-transformer';
import { EventOccurrenceCreateWithoutLikesInput } from './event-occurrence-create-without-likes.input';

@InputType()
export class EventOccurrenceCreateOrConnectWithoutLikesInput {
  @Field(() => EventOccurrenceWhereUniqueInput, { nullable: false })
  @Type(() => EventOccurrenceWhereUniqueInput)
  where!: Prisma.AtLeast<EventOccurrenceWhereUniqueInput, 'id'>;

  @Field(() => EventOccurrenceCreateWithoutLikesInput, { nullable: false })
  @Type(() => EventOccurrenceCreateWithoutLikesInput)
  create!: EventOccurrenceCreateWithoutLikesInput;
}
