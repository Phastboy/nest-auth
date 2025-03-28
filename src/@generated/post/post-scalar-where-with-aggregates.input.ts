import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PostScalarWhereWithAggregatesInput {
  @Field(() => [PostScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<PostScalarWhereWithAggregatesInput>;

  @Field(() => [PostScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<PostScalarWhereWithAggregatesInput>;

  @Field(() => [PostScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<PostScalarWhereWithAggregatesInput>;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  content?: StringWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  image?: StringNullableWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  isEvent?: BoolWithAggregatesFilter;

  @Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  eventId?: IntNullableWithAggregatesFilter;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  userId?: IntWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;
}
