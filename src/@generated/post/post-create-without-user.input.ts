import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateNestedManyWithoutPostsInput } from '../category/category-create-nested-many-without-posts.input';
import { CommentCreateNestedManyWithoutPostInput } from '../comment/comment-create-nested-many-without-post.input';
import { LikeCreateNestedManyWithoutPostInput } from '../like/like-create-nested-many-without-post.input';
import { EventCreateNestedOneWithoutPostInput } from '../event/event-create-nested-one-without-post.input';

@InputType()
export class PostCreateWithoutUserInput {
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

  @Field(() => CategoryCreateNestedManyWithoutPostsInput, { nullable: true })
  categories?: CategoryCreateNestedManyWithoutPostsInput;

  @Field(() => CommentCreateNestedManyWithoutPostInput, { nullable: true })
  comments?: CommentCreateNestedManyWithoutPostInput;

  @Field(() => LikeCreateNestedManyWithoutPostInput, { nullable: true })
  likes?: LikeCreateNestedManyWithoutPostInput;

  @Field(() => EventCreateNestedOneWithoutPostInput, { nullable: true })
  event?: EventCreateNestedOneWithoutPostInput;
}
