import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRsvpInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
