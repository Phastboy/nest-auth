import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPostsInput } from '../user/user-create-nested-one-without-posts.input';
import { CategoryCreateNestedManyWithoutPostsInput } from '../category/category-create-nested-many-without-posts.input';
import { LikeCreateNestedManyWithoutPostInput } from '../like/like-create-nested-many-without-post.input';
import { EventCreateNestedOneWithoutPostInput } from '../event/event-create-nested-one-without-post.input';

@InputType()
export class PostCreateWithoutCommentsInput {
  @Field(() => String, { nullable: false })
  content!: string;

  @Field(() => String, { nullable: true })
  image?: string;

  @Field(() => Boolean, { nullable: true })
  isEvent?: boolean;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => UserCreateNestedOneWithoutPostsInput, { nullable: false })
  user!: UserCreateNestedOneWithoutPostsInput;

  @Field(() => CategoryCreateNestedManyWithoutPostsInput, { nullable: true })
  categories?: CategoryCreateNestedManyWithoutPostsInput;

  @Field(() => LikeCreateNestedManyWithoutPostInput, { nullable: true })
  likes?: LikeCreateNestedManyWithoutPostInput;

  @Field(() => EventCreateNestedOneWithoutPostInput, { nullable: true })
  event?: EventCreateNestedOneWithoutPostInput;
}
