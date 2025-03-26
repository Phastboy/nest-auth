import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RSVPUpdateManyMutationInput } from '../rsvp/rsvp-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RSVPWhereInput } from '../rsvp/rsvp-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyRsvpArgs {
  @Field(() => RSVPUpdateManyMutationInput, { nullable: false })
  @Type(() => RSVPUpdateManyMutationInput)
  data!: RSVPUpdateManyMutationInput;

  @Field(() => RSVPWhereInput, { nullable: true })
  @Type(() => RSVPWhereInput)
  where?: RSVPWhereInput;

  @Field(() => Int, { nullable: true })
  limit?: number;
}
