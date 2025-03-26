import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutRsvpsInput } from '../user/user-create-nested-one-without-rsvps.input';
import { EventCreateNestedOneWithoutRsvpsInput } from '../event/event-create-nested-one-without-rsvps.input';

@InputType()
export class RSVPCreateInput {
  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => UserCreateNestedOneWithoutRsvpsInput, { nullable: false })
  user!: UserCreateNestedOneWithoutRsvpsInput;

  @Field(() => EventCreateNestedOneWithoutRsvpsInput, { nullable: false })
  event!: EventCreateNestedOneWithoutRsvpsInput;
}
