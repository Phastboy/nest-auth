import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { PostNullableScalarRelationFilter } from '../post/post-nullable-scalar-relation-filter.input';
import { EventNullableScalarRelationFilter } from '../event/event-nullable-scalar-relation-filter.input';

@InputType()
export class LikeWhereInput {
  @Field(() => [LikeWhereInput], { nullable: true })
  AND?: Array<LikeWhereInput>;

  @Field(() => [LikeWhereInput], { nullable: true })
  OR?: Array<LikeWhereInput>;

  @Field(() => [LikeWhereInput], { nullable: true })
  NOT?: Array<LikeWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  userId?: IntFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  postId?: IntNullableFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  eventId?: IntNullableFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => UserScalarRelationFilter, { nullable: true })
  user?: UserScalarRelationFilter;

  @Field(() => PostNullableScalarRelationFilter, { nullable: true })
  post?: PostNullableScalarRelationFilter;

  @Field(() => EventNullableScalarRelationFilter, { nullable: true })
  event?: EventNullableScalarRelationFilter;
}
