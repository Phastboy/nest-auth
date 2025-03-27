import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRsvpInput {
  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Int, { nullable: false })
  eventId: number;
}
