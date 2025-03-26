import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutNotificationsInput } from '../user/user-create-nested-one-without-notifications.input';

@InputType()
export class NotificationCreateInput {
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

  @Field(() => UserCreateNestedOneWithoutNotificationsInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutNotificationsInput;
}
