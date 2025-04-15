import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EventOccurrenceAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  eventId?: true;

  @Field(() => Boolean, { nullable: true })
  buildingId?: true;

  @Field(() => Boolean, { nullable: true })
  roomId?: true;
}
