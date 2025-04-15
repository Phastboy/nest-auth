import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventOccurrenceUpdateWithoutLikesInput } from './event-occurrence-update-without-likes.input';
import { Type } from 'class-transformer';
import { EventOccurrenceCreateWithoutLikesInput } from './event-occurrence-create-without-likes.input';
import { EventOccurrenceWhereInput } from './event-occurrence-where.input';

@InputType()
export class EventOccurrenceUpsertWithoutLikesInput {
  @Field(() => EventOccurrenceUpdateWithoutLikesInput, { nullable: false })
  @Type(() => EventOccurrenceUpdateWithoutLikesInput)
  update!: EventOccurrenceUpdateWithoutLikesInput;

  @Field(() => EventOccurrenceCreateWithoutLikesInput, { nullable: false })
  @Type(() => EventOccurrenceCreateWithoutLikesInput)
  create!: EventOccurrenceCreateWithoutLikesInput;

  @Field(() => EventOccurrenceWhereInput, { nullable: true })
  @Type(() => EventOccurrenceWhereInput)
  where?: EventOccurrenceWhereInput;
}
