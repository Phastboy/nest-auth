import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class RSVPUncheckedCreateWithoutEventInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => Int, { nullable: false })
  userId!: number;

  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
}
