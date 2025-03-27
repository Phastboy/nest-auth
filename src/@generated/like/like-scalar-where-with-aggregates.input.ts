import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class LikeScalarWhereWithAggregatesInput {

    @Field(() => [LikeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LikeScalarWhereWithAggregatesInput>;

    @Field(() => [LikeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LikeScalarWhereWithAggregatesInput>;

    @Field(() => [LikeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LikeScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    postId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    eventId?: IntNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
