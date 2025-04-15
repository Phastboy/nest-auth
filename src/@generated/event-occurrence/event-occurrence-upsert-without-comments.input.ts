import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventOccurrenceUpdateWithoutCommentsInput } from './event-occurrence-update-without-comments.input';
import { Type } from 'class-transformer';
import { EventOccurrenceCreateWithoutCommentsInput } from './event-occurrence-create-without-comments.input';
import { EventOccurrenceWhereInput } from './event-occurrence-where.input';

@InputType()
export class EventOccurrenceUpsertWithoutCommentsInput {
  @Field(() => EventOccurrenceUpdateWithoutCommentsInput, { nullable: false })
  @Type(() => EventOccurrenceUpdateWithoutCommentsInput)
  update!: EventOccurrenceUpdateWithoutCommentsInput;

  @Field(() => EventOccurrenceCreateWithoutCommentsInput, { nullable: false })
  @Type(() => EventOccurrenceCreateWithoutCommentsInput)
  create!: EventOccurrenceCreateWithoutCommentsInput;

  @Field(() => EventOccurrenceWhereInput, { nullable: true })
  @Type(() => EventOccurrenceWhereInput)
  where?: EventOccurrenceWhereInput;
}
