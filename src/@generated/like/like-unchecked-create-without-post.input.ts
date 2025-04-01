import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class LikeUncheckedCreateWithoutPostInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => Int, { nullable: false })
  userId!: number;

  @Field(() => Int, { nullable: true })
  eventId?: number;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
}
