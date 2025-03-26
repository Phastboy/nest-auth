import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CategoryUncheckedCreateNestedManyWithoutPostsInput } from '../category/category-unchecked-create-nested-many-without-posts.input';
import { CommentUncheckedCreateNestedManyWithoutPostInput } from '../comment/comment-unchecked-create-nested-many-without-post.input';
import { LikeUncheckedCreateNestedManyWithoutPostInput } from '../like/like-unchecked-create-nested-many-without-post.input';
import { EventUncheckedCreateNestedOneWithoutPostInput } from '../event/event-unchecked-create-nested-one-without-post.input';

@InputType()
export class PostUncheckedCreateInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: false })
  content!: string;

  @Field(() => String, { nullable: true })
  image?: string;

  @Field(() => Boolean, { nullable: true })
  isEvent?: boolean;

  @Field(() => Int, { nullable: false })
  userId!: number;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => CategoryUncheckedCreateNestedManyWithoutPostsInput, {
    nullable: true,
  })
  categories?: CategoryUncheckedCreateNestedManyWithoutPostsInput;

  @Field(() => CommentUncheckedCreateNestedManyWithoutPostInput, {
    nullable: true,
  })
  comments?: CommentUncheckedCreateNestedManyWithoutPostInput;

  @Field(() => LikeUncheckedCreateNestedManyWithoutPostInput, {
    nullable: true,
  })
  likes?: LikeUncheckedCreateNestedManyWithoutPostInput;

  @Field(() => EventUncheckedCreateNestedOneWithoutPostInput, {
    nullable: true,
  })
  event?: EventUncheckedCreateNestedOneWithoutPostInput;
}
