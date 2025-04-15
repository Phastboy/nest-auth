import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventOccurrenceUpdateInput } from './event-occurrence-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { EventOccurrenceWhereUniqueInput } from './event-occurrence-where-unique.input';

@ArgsType()
export class UpdateOneEventOccurrenceArgs {
  @Field(() => EventOccurrenceUpdateInput, { nullable: false })
  @Type(() => EventOccurrenceUpdateInput)
  data!: EventOccurrenceUpdateInput;

  @Field(() => EventOccurrenceWhereUniqueInput, { nullable: false })
  @Type(() => EventOccurrenceWhereUniqueInput)
  where!: Prisma.AtLeast<EventOccurrenceWhereUniqueInput, 'id'>;
}
