import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventOccurrenceWhereInput } from './event-occurrence-where.input';
import { Type } from 'class-transformer';
import { EventOccurrenceUpdateWithoutLikesInput } from './event-occurrence-update-without-likes.input';

@InputType()
export class EventOccurrenceUpdateToOneWithWhereWithoutLikesInput {
  @Field(() => EventOccurrenceWhereInput, { nullable: true })
  @Type(() => EventOccurrenceWhereInput)
  where?: EventOccurrenceWhereInput;

  @Field(() => EventOccurrenceUpdateWithoutLikesInput, { nullable: false })
  @Type(() => EventOccurrenceUpdateWithoutLikesInput)
  data!: EventOccurrenceUpdateWithoutLikesInput;
}
