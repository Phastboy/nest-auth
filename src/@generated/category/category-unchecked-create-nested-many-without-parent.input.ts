import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutParentInput } from './category-create-without-parent.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutParentInput } from './category-create-or-connect-without-parent.input';
import { CategoryCreateManyParentInputEnvelope } from './category-create-many-parent-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryUncheckedCreateNestedManyWithoutParentInput {
  @Field(() => [CategoryCreateWithoutParentInput], { nullable: true })
  @Type(() => CategoryCreateWithoutParentInput)
  create?: Array<CategoryCreateWithoutParentInput>;

  @Field(() => [CategoryCreateOrConnectWithoutParentInput], { nullable: true })
  @Type(() => CategoryCreateOrConnectWithoutParentInput)
  connectOrCreate?: Array<CategoryCreateOrConnectWithoutParentInput>;

  @Field(() => CategoryCreateManyParentInputEnvelope, { nullable: true })
  @Type(() => CategoryCreateManyParentInputEnvelope)
  createMany?: CategoryCreateManyParentInputEnvelope;

  @Field(() => [CategoryWhereUniqueInput], { nullable: true })
  @Type(() => CategoryWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name' | 'slug'>
  >;
}
