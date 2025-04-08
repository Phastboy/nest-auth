import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereInput } from './category-where.input';
import { Type } from 'class-transformer';
import { CategoryUpdateWithoutChildrenInput } from './category-update-without-children.input';

@InputType()
export class CategoryUpdateToOneWithWhereWithoutChildrenInput {
  @Field(() => CategoryWhereInput, { nullable: true })
  @Type(() => CategoryWhereInput)
  where?: CategoryWhereInput;

  @Field(() => CategoryUpdateWithoutChildrenInput, { nullable: false })
  @Type(() => CategoryUpdateWithoutChildrenInput)
  data!: CategoryUpdateWithoutChildrenInput;
}
