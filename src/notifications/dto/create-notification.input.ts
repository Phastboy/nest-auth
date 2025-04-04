import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateNotificationInput {
  @Field(() => String, { description: 'The title of the notification' })
  title: string;

  @Field(() => String, { description: 'The message of the notification' })
  content: string;

  @Field(() => Int, {
    description: 'The ID of the user to whom the notification is sent',
  })
  userId: number;

  @Field(() => Boolean, {
    description: 'Whether the notification is read or not',
    defaultValue: false,
  })
  isRead?: boolean;

  @Field(() => String, { description: 'The type of the notification' })
  type: string;
}
