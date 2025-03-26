import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class CategoryScalarWhereWithAggregatesInput {
  @Field(() => [CategoryScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<CategoryScalarWhereWithAggregatesInput>;

  @Field(() => [CategoryScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<CategoryScalarWhereWithAggregatesInput>;

  @Field(() => [CategoryScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<CategoryScalarWhereWithAggregatesInput>;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  slug?: StringWithAggregatesFilter;

  @Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  parentId?: IntNullableWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;
}
