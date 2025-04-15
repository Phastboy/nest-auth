import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutOccurrencesInput } from './event-create-without-occurrences.input';

@InputType()
export class EventCreateOrConnectWithoutOccurrencesInput {
  @Field(() => EventWhereUniqueInput, { nullable: false })
  @Type(() => EventWhereUniqueInput)
  where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

  @Field(() => EventCreateWithoutOccurrencesInput, { nullable: false })
  @Type(() => EventCreateWithoutOccurrencesInput)
  create!: EventCreateWithoutOccurrencesInput;
}
