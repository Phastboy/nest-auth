import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RSVPCreateManyUserInput } from './rsvp-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class RSVPCreateManyUserInputEnvelope {
  @Field(() => [RSVPCreateManyUserInput], { nullable: false })
  @Type(() => RSVPCreateManyUserInput)
  data!: Array<RSVPCreateManyUserInput>;
}
