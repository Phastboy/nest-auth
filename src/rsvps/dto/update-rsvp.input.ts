import { CreateRsvpInput } from './create-rsvp.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRsvpInput extends PartialType(CreateRsvpInput) {
  @Field(() => Int)
  id: number;
}
