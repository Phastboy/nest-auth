import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { EventCreateNestedManyWithoutUserInput } from '../event/event-create-nested-many-without-user.input';
import { CommentCreateNestedManyWithoutUserInput } from '../comment/comment-create-nested-many-without-user.input';
import { NotificationCreateNestedManyWithoutUserInput } from '../notification/notification-create-nested-many-without-user.input';
import { LikeCreateNestedManyWithoutUserInput } from '../like/like-create-nested-many-without-user.input';
import { RSVPCreateNestedManyWithoutUserInput } from '../rsvp/rsvp-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutPostsInput {
  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  username!: string;

  @Field(() => String, { nullable: false })
  password!: string;

  @Field(() => String, { nullable: true })
  avatar?: string;

  @Field(() => Role, { nullable: true })
  role?: `${Role}`;

  @Field(() => String, { nullable: true })
  bio?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => EventCreateNestedManyWithoutUserInput, { nullable: true })
  events?: EventCreateNestedManyWithoutUserInput;

  @Field(() => CommentCreateNestedManyWithoutUserInput, { nullable: true })
  comments?: CommentCreateNestedManyWithoutUserInput;

  @Field(() => NotificationCreateNestedManyWithoutUserInput, { nullable: true })
  notifications?: NotificationCreateNestedManyWithoutUserInput;

  @Field(() => LikeCreateNestedManyWithoutUserInput, { nullable: true })
  likes?: LikeCreateNestedManyWithoutUserInput;

  @Field(() => RSVPCreateNestedManyWithoutUserInput, { nullable: true })
  rsvps?: RSVPCreateNestedManyWithoutUserInput;
}
