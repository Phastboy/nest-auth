import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EventMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  title?: true;

  @Field(() => Boolean, { nullable: true })
  description?: true;

  @Field(() => Boolean, { nullable: true })
  startTime?: true;

  @Field(() => Boolean, { nullable: true })
  endTime?: true;

  @Field(() => Boolean, { nullable: true })
  image?: true;

  @Field(() => Boolean, { nullable: true })
  isRecurring?: true;

  @Field(() => Boolean, { nullable: true })
  recurrenceRule?: true;

  @Field(() => Boolean, { nullable: true })
  isPublic?: true;

  @Field(() => Boolean, { nullable: true })
  userId?: true;

  @Field(() => Boolean, { nullable: true })
  shareAsPost?: true;

  @Field(() => Boolean, { nullable: true })
  eventStatus?: true;

  @Field(() => Boolean, { nullable: true })
  eventMode?: true;

  @Field(() => Boolean, { nullable: true })
  eventType?: true;

  @Field(() => Boolean, { nullable: true })
  eventLink?: true;

  @Field(() => Boolean, { nullable: true })
  roomId?: true;

  @Field(() => Boolean, { nullable: true })
  buildingId?: true;

  @Field(() => Boolean, { nullable: true })
  createdAt?: true;

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}
