import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateNestedManyWithoutParentInput } from './category-create-nested-many-without-parent.input';
import { PostCreateNestedManyWithoutCategoriesInput } from '../post/post-create-nested-many-without-categories.input';
import { EventCreateNestedManyWithoutCategoriesInput } from '../event/event-create-nested-many-without-categories.input';

@InputType()
export class CategoryCreateWithoutParentInput {
  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  slug!: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => CategoryCreateNestedManyWithoutParentInput, { nullable: true })
  children?: CategoryCreateNestedManyWithoutParentInput;

  @Field(() => PostCreateNestedManyWithoutCategoriesInput, { nullable: true })
  posts?: PostCreateNestedManyWithoutCategoriesInput;

  @Field(() => EventCreateNestedManyWithoutCategoriesInput, { nullable: true })
  events?: EventCreateNestedManyWithoutCategoriesInput;
}
