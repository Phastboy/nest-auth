import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class Notification {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  userId!: number;

  @Field(() => String, { nullable: false })
  type!: string;

  @Field(() => String, { nullable: false })
  content!: string;

  @Field(() => Boolean, { defaultValue: false, nullable: false })
  isRead!: boolean;

  @Field(() => Int, { nullable: true })
  referenceId!: number | null;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => User, { nullable: false })
  user?: User;
}
