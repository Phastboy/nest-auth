import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RSVPCreateInput } from '../rsvp/rsvp-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRsvpArgs {
  @Field(() => RSVPCreateInput, { nullable: false })
  @Type(() => RSVPCreateInput)
  data!: RSVPCreateInput;
}
