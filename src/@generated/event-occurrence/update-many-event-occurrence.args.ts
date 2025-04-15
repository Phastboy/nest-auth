import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventOccurrenceUpdateManyMutationInput } from './event-occurrence-update-many-mutation.input';
import { Type } from 'class-transformer';
import { EventOccurrenceWhereInput } from './event-occurrence-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyEventOccurrenceArgs {
  @Field(() => EventOccurrenceUpdateManyMutationInput, { nullable: false })
  @Type(() => EventOccurrenceUpdateManyMutationInput)
  data!: EventOccurrenceUpdateManyMutationInput;

  @Field(() => EventOccurrenceWhereInput, { nullable: true })
  @Type(() => EventOccurrenceWhereInput)
  where?: EventOccurrenceWhereInput;

  @Field(() => Int, { nullable: true })
  limit?: number;
}
