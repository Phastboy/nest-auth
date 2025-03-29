import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutEventsInput } from './category-create-without-events.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutEventsInput } from './category-create-or-connect-without-events.input';
import { CategoryUpsertWithWhereUniqueWithoutEventsInput } from './category-upsert-with-where-unique-without-events.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithWhereUniqueWithoutEventsInput } from './category-update-with-where-unique-without-events.input';
import { CategoryUpdateManyWithWhereWithoutEventsInput } from './category-update-many-with-where-without-events.input';
import { CategoryScalarWhereInput } from './category-scalar-where.input';

@InputType()
export class CategoryUncheckedUpdateManyWithoutEventsNestedInput {
  @Field(() => [CategoryCreateWithoutEventsInput], { nullable: true })
  @Type(() => CategoryCreateWithoutEventsInput)
  create?: Array<CategoryCreateWithoutEventsInput>;

  @Field(() => [CategoryCreateOrConnectWithoutEventsInput], { nullable: true })
  @Type(() => CategoryCreateOrConnectWithoutEventsInput)
  connectOrCreate?: Array<CategoryCreateOrConnectWithoutEventsInput>;

  @Field(() => [CategoryUpsertWithWhereUniqueWithoutEventsInput], {
    nullable: true,
  })
  @Type(() => CategoryUpsertWithWhereUniqueWithoutEventsInput)
  upsert?: Array<CategoryUpsertWithWhereUniqueWithoutEventsInput>;

  @Field(() => [CategoryWhereUniqueInput], { nullable: true })
  @Type(() => CategoryWhereUniqueInput)
  set?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name' | 'slug'>>;

  @Field(() => [CategoryWhereUniqueInput], { nullable: true })
  @Type(() => CategoryWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name' | 'slug'>
  >;

  @Field(() => [CategoryWhereUniqueInput], { nullable: true })
  @Type(() => CategoryWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name' | 'slug'>
  >;

  @Field(() => [CategoryWhereUniqueInput], { nullable: true })
  @Type(() => CategoryWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name' | 'slug'>
  >;

  @Field(() => [CategoryUpdateWithWhereUniqueWithoutEventsInput], {
    nullable: true,
  })
  @Type(() => CategoryUpdateWithWhereUniqueWithoutEventsInput)
  update?: Array<CategoryUpdateWithWhereUniqueWithoutEventsInput>;

  @Field(() => [CategoryUpdateManyWithWhereWithoutEventsInput], {
    nullable: true,
  })
  @Type(() => CategoryUpdateManyWithWhereWithoutEventsInput)
  updateMany?: Array<CategoryUpdateManyWithWhereWithoutEventsInput>;

  @Field(() => [CategoryScalarWhereInput], { nullable: true })
  @Type(() => CategoryScalarWhereInput)
  deleteMany?: Array<CategoryScalarWhereInput>;
}
