import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventOccurrenceScalarWhereInput } from './event-occurrence-scalar-where.input';
import { Type } from 'class-transformer';
import { EventOccurrenceUpdateManyMutationInput } from './event-occurrence-update-many-mutation.input';

@InputType()
export class EventOccurrenceUpdateManyWithWhereWithoutRoomInput {
  @Field(() => EventOccurrenceScalarWhereInput, { nullable: false })
  @Type(() => EventOccurrenceScalarWhereInput)
  where!: EventOccurrenceScalarWhereInput;

  @Field(() => EventOccurrenceUpdateManyMutationInput, { nullable: false })
  @Type(() => EventOccurrenceUpdateManyMutationInput)
  data!: EventOccurrenceUpdateManyMutationInput;
}
