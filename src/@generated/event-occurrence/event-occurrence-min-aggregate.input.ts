import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EventOccurrenceMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  eventId?: true;

  @Field(() => Boolean, { nullable: true })
  startTime?: true;

  @Field(() => Boolean, { nullable: true })
  endTime?: true;

  @Field(() => Boolean, { nullable: true })
  eventStatus?: true;

  @Field(() => Boolean, { nullable: true })
  eventMode?: true;

  @Field(() => Boolean, { nullable: true })
  eventLink?: true;

  @Field(() => Boolean, { nullable: true })
  buildingId?: true;

  @Field(() => Boolean, { nullable: true })
  roomId?: true;

  @Field(() => Boolean, { nullable: true })
  createdAt?: true;

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}
