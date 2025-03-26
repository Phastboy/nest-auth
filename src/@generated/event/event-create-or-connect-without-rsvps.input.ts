import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutRsvpsInput } from './event-create-without-rsvps.input';

@InputType()
export class EventCreateOrConnectWithoutRsvpsInput {
  @Field(() => EventWhereUniqueInput, { nullable: false })
  @Type(() => EventWhereUniqueInput)
  where!: Prisma.AtLeast<EventWhereUniqueInput, 'id' | 'postId'>;

  @Field(() => EventCreateWithoutRsvpsInput, { nullable: false })
  @Type(() => EventCreateWithoutRsvpsInput)
  create!: EventCreateWithoutRsvpsInput;
}
