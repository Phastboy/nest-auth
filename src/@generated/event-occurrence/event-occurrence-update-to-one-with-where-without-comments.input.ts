import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventOccurrenceWhereInput } from './event-occurrence-where.input';
import { Type } from 'class-transformer';
import { EventOccurrenceUpdateWithoutCommentsInput } from './event-occurrence-update-without-comments.input';

@InputType()
export class EventOccurrenceUpdateToOneWithWhereWithoutCommentsInput {
  @Field(() => EventOccurrenceWhereInput, { nullable: true })
  @Type(() => EventOccurrenceWhereInput)
  where?: EventOccurrenceWhereInput;

  @Field(() => EventOccurrenceUpdateWithoutCommentsInput, { nullable: false })
  @Type(() => EventOccurrenceUpdateWithoutCommentsInput)
  data!: EventOccurrenceUpdateWithoutCommentsInput;
}
