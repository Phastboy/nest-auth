import { InputType, Field, Int } from '@nestjs/graphql';
import { EventStatus, EventType, EventMode } from 'src/@generated';

@InputType()
export class EventFilterInput {
  @Field(() => Int, { nullable: true })
  userId?: number;

  @Field(() => Int, { nullable: true })
  categoryId?: number;

  @Field(() => EventStatus, { nullable: true })
  eventStatus?: `${EventStatus}`;

  @Field(() => EventType, { nullable: true })
  eventType?: `${EventType}`;

  @Field(() => EventMode, { nullable: true })
  eventMode?: `${EventMode}`;
}
