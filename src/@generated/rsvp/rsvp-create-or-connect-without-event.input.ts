import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RSVPWhereUniqueInput } from './rsvp-where-unique.input';
import { Type } from 'class-transformer';
import { RSVPCreateWithoutEventInput } from './rsvp-create-without-event.input';

@InputType()
export class RSVPCreateOrConnectWithoutEventInput {
  @Field(() => RSVPWhereUniqueInput, { nullable: false })
  @Type(() => RSVPWhereUniqueInput)
  where!: Prisma.AtLeast<RSVPWhereUniqueInput, 'id' | 'userId_eventId'>;

  @Field(() => RSVPCreateWithoutEventInput, { nullable: false })
  @Type(() => RSVPCreateWithoutEventInput)
  create!: RSVPCreateWithoutEventInput;
}
