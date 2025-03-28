import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationUpdateManyMutationInput } from './notification-update-many-mutation.input';
import { Type } from 'class-transformer';
import { NotificationWhereInput } from './notification-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyNotificationArgs {
  @Field(() => NotificationUpdateManyMutationInput, { nullable: false })
  @Type(() => NotificationUpdateManyMutationInput)
  data!: NotificationUpdateManyMutationInput;

  @Field(() => NotificationWhereInput, { nullable: true })
  @Type(() => NotificationWhereInput)
  where?: NotificationWhereInput;

  @Field(() => Int, { nullable: true })
  limit?: number;
}
