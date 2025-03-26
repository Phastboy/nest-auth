import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PostUncheckedCreateNestedManyWithoutUserInput } from '../post/post-unchecked-create-nested-many-without-user.input';
import { EventUncheckedCreateNestedManyWithoutUserInput } from '../event/event-unchecked-create-nested-many-without-user.input';
import { NotificationUncheckedCreateNestedManyWithoutUserInput } from '../notification/notification-unchecked-create-nested-many-without-user.input';
import { LikeUncheckedCreateNestedManyWithoutUserInput } from '../like/like-unchecked-create-nested-many-without-user.input';
import { RSVPUncheckedCreateNestedManyWithoutUserInput } from '../rsvp/rsvp-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutCommentsInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  username!: string;

  @Field(() => String, { nullable: false })
  password!: string;

  @Field(() => String, { nullable: true })
  avatar?: string;

  @Field(() => String, { nullable: true })
  role?: string;

  @Field(() => String, { nullable: true })
  bio?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => PostUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  posts?: PostUncheckedCreateNestedManyWithoutUserInput;

  @Field(() => EventUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  events?: EventUncheckedCreateNestedManyWithoutUserInput;

  @Field(() => NotificationUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;

  @Field(() => LikeUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  likes?: LikeUncheckedCreateNestedManyWithoutUserInput;

  @Field(() => RSVPUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  rsvps?: RSVPUncheckedCreateNestedManyWithoutUserInput;
}
