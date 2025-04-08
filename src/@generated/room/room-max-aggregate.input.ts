import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RoomMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  name?: true;

  @Field(() => Boolean, { nullable: true })
  buildingId?: true;

  @Field(() => Boolean, { nullable: true })
  capacity?: true;

  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
}
