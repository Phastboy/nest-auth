import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUncheckedCreateNestedManyWithoutParentInput } from './category-unchecked-create-nested-many-without-parent.input';
import { PostUncheckedCreateNestedManyWithoutCategoriesInput } from '../post/post-unchecked-create-nested-many-without-categories.input';

@InputType()
export class CategoryUncheckedCreateWithoutEventsInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  slug!: string;

  @Field(() => String, { nullable: true })
  parentId?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => CategoryUncheckedCreateNestedManyWithoutParentInput, {
    nullable: true,
  })
  children?: CategoryUncheckedCreateNestedManyWithoutParentInput;

  @Field(() => PostUncheckedCreateNestedManyWithoutCategoriesInput, {
    nullable: true,
  })
  posts?: PostUncheckedCreateNestedManyWithoutCategoriesInput;
}
