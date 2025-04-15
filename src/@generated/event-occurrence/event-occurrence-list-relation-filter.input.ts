import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventOccurrenceWhereInput } from './event-occurrence-where.input';

@InputType()
export class EventOccurrenceListRelationFilter {
  @Field(() => EventOccurrenceWhereInput, { nullable: true })
  every?: EventOccurrenceWhereInput;

  @Field(() => EventOccurrenceWhereInput, { nullable: true })
  some?: EventOccurrenceWhereInput;

  @Field(() => EventOccurrenceWhereInput, { nullable: true })
  none?: EventOccurrenceWhereInput;
}
