import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutOccurrencesInput } from './event-create-without-occurrences.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutOccurrencesInput } from './event-create-or-connect-without-occurrences.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';

@InputType()
export class EventCreateNestedOneWithoutOccurrencesInput {
  @Field(() => EventCreateWithoutOccurrencesInput, { nullable: true })
  @Type(() => EventCreateWithoutOccurrencesInput)
  create?: EventCreateWithoutOccurrencesInput;

  @Field(() => EventCreateOrConnectWithoutOccurrencesInput, { nullable: true })
  @Type(() => EventCreateOrConnectWithoutOccurrencesInput)
  connectOrCreate?: EventCreateOrConnectWithoutOccurrencesInput;

  @Field(() => EventWhereUniqueInput, { nullable: true })
  @Type(() => EventWhereUniqueInput)
  connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;
}
