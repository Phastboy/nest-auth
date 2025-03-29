import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { PostCreateNestedManyWithoutUserInput } from '../post/post-create-nested-many-without-user.input';
import { EventCreateNestedManyWithoutUserInput } from '../event/event-create-nested-many-without-user.input';
import { CommentCreateNestedManyWithoutUserInput } from '../comment/comment-create-nested-many-without-user.input';
import { LikeCreateNestedManyWithoutUserInput } from '../like/like-create-nested-many-without-user.input';
import { RSVPCreateNestedManyWithoutUserInput } from '../rsvp/rsvp-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutNotificationsInput {
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

  @Field(() => PostCreateNestedManyWithoutUserInput, { nullable: true })
  posts?: PostCreateNestedManyWithoutUserInput;

  @Field(() => EventCreateNestedManyWithoutUserInput, { nullable: true })
  events?: EventCreateNestedManyWithoutUserInput;

  @Field(() => CommentCreateNestedManyWithoutUserInput, { nullable: true })
  comments?: CommentCreateNestedManyWithoutUserInput;

  @Field(() => LikeCreateNestedManyWithoutUserInput, { nullable: true })
  likes?: LikeCreateNestedManyWithoutUserInput;

  @Field(() => RSVPCreateNestedManyWithoutUserInput, { nullable: true })
  rsvps?: RSVPCreateNestedManyWithoutUserInput;
}
