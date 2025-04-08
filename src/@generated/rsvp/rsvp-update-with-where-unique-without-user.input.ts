import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RSVPWhereUniqueInput } from './rsvp-where-unique.input';
import { Type } from 'class-transformer';
import { RSVPUpdateWithoutUserInput } from './rsvp-update-without-user.input';

@InputType()
export class RSVPUpdateWithWhereUniqueWithoutUserInput {
  @Field(() => RSVPWhereUniqueInput, { nullable: false })
  @Type(() => RSVPWhereUniqueInput)
  where!: Prisma.AtLeast<RSVPWhereUniqueInput, 'id' | 'userId_eventId'>;

  @Field(() => RSVPUpdateWithoutUserInput, { nullable: false })
  @Type(() => RSVPUpdateWithoutUserInput)
  data!: RSVPUpdateWithoutUserInput;
}
