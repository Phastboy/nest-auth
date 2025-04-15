import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventOccurrenceWhereUniqueInput } from './event-occurrence-where-unique.input';
import { Type } from 'class-transformer';
import { EventOccurrenceCreateWithoutCommentsInput } from './event-occurrence-create-without-comments.input';

@InputType()
export class EventOccurrenceCreateOrConnectWithoutCommentsInput {
  @Field(() => EventOccurrenceWhereUniqueInput, { nullable: false })
  @Type(() => EventOccurrenceWhereUniqueInput)
  where!: Prisma.AtLeast<EventOccurrenceWhereUniqueInput, 'id'>;

  @Field(() => EventOccurrenceCreateWithoutCommentsInput, { nullable: false })
  @Type(() => EventOccurrenceCreateWithoutCommentsInput)
  create!: EventOccurrenceCreateWithoutCommentsInput;
}
