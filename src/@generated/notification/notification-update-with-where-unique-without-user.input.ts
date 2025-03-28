import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationUpdateWithoutUserInput } from './notification-update-without-user.input';

@InputType()
export class NotificationUpdateWithWhereUniqueWithoutUserInput {
  @Field(() => NotificationWhereUniqueInput, { nullable: false })
  @Type(() => NotificationWhereUniqueInput)
  where!: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;

  @Field(() => NotificationUpdateWithoutUserInput, { nullable: false })
  @Type(() => NotificationUpdateWithoutUserInput)
  data!: NotificationUpdateWithoutUserInput;
}
