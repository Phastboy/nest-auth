import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventOccurrenceWhereUniqueInput } from './event-occurrence-where-unique.input';
import { Type } from 'class-transformer';
import { EventOccurrenceCreateInput } from './event-occurrence-create.input';
import { EventOccurrenceUpdateInput } from './event-occurrence-update.input';

@ArgsType()
export class UpsertOneEventOccurrenceArgs {
  @Field(() => EventOccurrenceWhereUniqueInput, { nullable: false })
  @Type(() => EventOccurrenceWhereUniqueInput)
  where!: Prisma.AtLeast<EventOccurrenceWhereUniqueInput, 'id'>;

  @Field(() => EventOccurrenceCreateInput, { nullable: false })
  @Type(() => EventOccurrenceCreateInput)
  create!: EventOccurrenceCreateInput;

  @Field(() => EventOccurrenceUpdateInput, { nullable: false })
  @Type(() => EventOccurrenceUpdateInput)
  update!: EventOccurrenceUpdateInput;
}
