import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RSVPWhereInput } from './rsvp-where.input';

@InputType()
export class RSVPListRelationFilter {
  @Field(() => RSVPWhereInput, { nullable: true })
  every?: RSVPWhereInput;

  @Field(() => RSVPWhereInput, { nullable: true })
  some?: RSVPWhereInput;

  @Field(() => RSVPWhereInput, { nullable: true })
  none?: RSVPWhereInput;
}
