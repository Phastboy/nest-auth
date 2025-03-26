import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CategoryScalarWhereInput {
  @Field(() => [CategoryScalarWhereInput], { nullable: true })
  AND?: Array<CategoryScalarWhereInput>;

  @Field(() => [CategoryScalarWhereInput], { nullable: true })
  OR?: Array<CategoryScalarWhereInput>;

  @Field(() => [CategoryScalarWhereInput], { nullable: true })
  NOT?: Array<CategoryScalarWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  slug?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  parentId?: StringNullableFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;
}
