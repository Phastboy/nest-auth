import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventOccurrenceCreateWithoutRsvpsInput } from './event-occurrence-create-without-rsvps.input';
import { Type } from 'class-transformer';
import { EventOccurrenceCreateOrConnectWithoutRsvpsInput } from './event-occurrence-create-or-connect-without-rsvps.input';
import { Prisma } from '@prisma/client';
import { EventOccurrenceWhereUniqueInput } from './event-occurrence-where-unique.input';

@InputType()
export class EventOccurrenceCreateNestedOneWithoutRsvpsInput {
  @Field(() => EventOccurrenceCreateWithoutRsvpsInput, { nullable: true })
  @Type(() => EventOccurrenceCreateWithoutRsvpsInput)
  create?: EventOccurrenceCreateWithoutRsvpsInput;

  @Field(() => EventOccurrenceCreateOrConnectWithoutRsvpsInput, {
    nullable: true,
  })
  @Type(() => EventOccurrenceCreateOrConnectWithoutRsvpsInput)
  connectOrCreate?: EventOccurrenceCreateOrConnectWithoutRsvpsInput;

  @Field(() => EventOccurrenceWhereUniqueInput, { nullable: true })
  @Type(() => EventOccurrenceWhereUniqueInput)
  connect?: Prisma.AtLeast<EventOccurrenceWhereUniqueInput, 'id'>;
}
