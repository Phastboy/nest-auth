import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CommentScalarWhereInput {
  @Field(() => [CommentScalarWhereInput], { nullable: true })
  AND?: Array<CommentScalarWhereInput>;

  @Field(() => [CommentScalarWhereInput], { nullable: true })
  OR?: Array<CommentScalarWhereInput>;

  @Field(() => [CommentScalarWhereInput], { nullable: true })
  NOT?: Array<CommentScalarWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  content?: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  userId?: IntFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  postId?: IntNullableFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  eventId?: IntNullableFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  parentId?: IntNullableFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;
}
