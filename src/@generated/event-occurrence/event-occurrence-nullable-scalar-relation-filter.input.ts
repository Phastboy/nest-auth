import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventOccurrenceWhereInput } from './event-occurrence-where.input';

@InputType()
export class EventOccurrenceNullableScalarRelationFilter {
  @Field(() => EventOccurrenceWhereInput, { nullable: true })
  is?: EventOccurrenceWhereInput;

  @Field(() => EventOccurrenceWhereInput, { nullable: true })
  isNot?: EventOccurrenceWhereInput;
}
