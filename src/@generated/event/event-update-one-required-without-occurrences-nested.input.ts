import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutOccurrencesInput } from './event-create-without-occurrences.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutOccurrencesInput } from './event-create-or-connect-without-occurrences.input';
import { EventUpsertWithoutOccurrencesInput } from './event-upsert-without-occurrences.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateToOneWithWhereWithoutOccurrencesInput } from './event-update-to-one-with-where-without-occurrences.input';

@InputType()
export class EventUpdateOneRequiredWithoutOccurrencesNestedInput {
  @Field(() => EventCreateWithoutOccurrencesInput, { nullable: true })
  @Type(() => EventCreateWithoutOccurrencesInput)
  create?: EventCreateWithoutOccurrencesInput;

  @Field(() => EventCreateOrConnectWithoutOccurrencesInput, { nullable: true })
  @Type(() => EventCreateOrConnectWithoutOccurrencesInput)
  connectOrCreate?: EventCreateOrConnectWithoutOccurrencesInput;

  @Field(() => EventUpsertWithoutOccurrencesInput, { nullable: true })
  @Type(() => EventUpsertWithoutOccurrencesInput)
  upsert?: EventUpsertWithoutOccurrencesInput;

  @Field(() => EventWhereUniqueInput, { nullable: true })
  @Type(() => EventWhereUniqueInput)
  connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

  @Field(() => EventUpdateToOneWithWhereWithoutOccurrencesInput, {
    nullable: true,
  })
  @Type(() => EventUpdateToOneWithWhereWithoutOccurrencesInput)
  update?: EventUpdateToOneWithWhereWithoutOccurrencesInput;
}
