import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutEventsInput } from './category-create-without-events.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutEventsInput } from './category-create-or-connect-without-events.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryUncheckedCreateNestedManyWithoutEventsInput {
  @Field(() => [CategoryCreateWithoutEventsInput], { nullable: true })
  @Type(() => CategoryCreateWithoutEventsInput)
  create?: Array<CategoryCreateWithoutEventsInput>;

  @Field(() => [CategoryCreateOrConnectWithoutEventsInput], { nullable: true })
  @Type(() => CategoryCreateOrConnectWithoutEventsInput)
  connectOrCreate?: Array<CategoryCreateOrConnectWithoutEventsInput>;

  @Field(() => [CategoryWhereUniqueInput], { nullable: true })
  @Type(() => CategoryWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name' | 'slug'>
  >;
}
