import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventOccurrenceCreateManyBuildingInput } from './event-occurrence-create-many-building.input';
import { Type } from 'class-transformer';

@InputType()
export class EventOccurrenceCreateManyBuildingInputEnvelope {
  @Field(() => [EventOccurrenceCreateManyBuildingInput], { nullable: false })
  @Type(() => EventOccurrenceCreateManyBuildingInput)
  data!: Array<EventOccurrenceCreateManyBuildingInput>;
}
