import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryUpdateWithoutEventsInput } from './category-update-without-events.input';
import { CategoryCreateWithoutEventsInput } from './category-create-without-events.input';

@InputType()
export class CategoryUpsertWithWhereUniqueWithoutEventsInput {
  @Field(() => CategoryWhereUniqueInput, { nullable: false })
  @Type(() => CategoryWhereUniqueInput)
  where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name' | 'slug'>;

  @Field(() => CategoryUpdateWithoutEventsInput, { nullable: false })
  @Type(() => CategoryUpdateWithoutEventsInput)
  update!: CategoryUpdateWithoutEventsInput;

  @Field(() => CategoryCreateWithoutEventsInput, { nullable: false })
  @Type(() => CategoryCreateWithoutEventsInput)
  create!: CategoryCreateWithoutEventsInput;
}
