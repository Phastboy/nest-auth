import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CategoryScalarWhereInput {
  @Field(() => [CategoryScalarWhereInput], { nullable: true })
  AND?: Array<CategoryScalarWhereInput>;

  @Field(() => [CategoryScalarWhereInput], { nullable: true })
  OR?: Array<CategoryScalarWhereInput>;

  @Field(() => [CategoryScalarWhereInput], { nullable: true })
  NOT?: Array<CategoryScalarWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  slug?: StringFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  parentId?: IntNullableFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;
}
