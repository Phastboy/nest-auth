import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class NotificationCreateManyUserInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: false })
  type!: string;

  @Field(() => String, { nullable: false })
  content!: string;

  @Field(() => Boolean, { nullable: true })
  isRead?: boolean;

  @Field(() => Int, { nullable: true })
  referenceId?: number;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
}
