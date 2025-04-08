import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereInput } from './event-where.input';
import { Type } from 'class-transformer';
import { EventUpdateWithoutRsvpsInput } from './event-update-without-rsvps.input';

@InputType()
export class EventUpdateToOneWithWhereWithoutRsvpsInput {
  @Field(() => EventWhereInput, { nullable: true })
  @Type(() => EventWhereInput)
  where?: EventWhereInput;

  @Field(() => EventUpdateWithoutRsvpsInput, { nullable: false })
  @Type(() => EventUpdateWithoutRsvpsInput)
  data!: EventUpdateWithoutRsvpsInput;
}
