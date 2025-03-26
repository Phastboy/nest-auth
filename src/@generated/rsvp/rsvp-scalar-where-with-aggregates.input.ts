import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class RSVPScalarWhereWithAggregatesInput {
  @Field(() => [RSVPScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<RSVPScalarWhereWithAggregatesInput>;

  @Field(() => [RSVPScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<RSVPScalarWhereWithAggregatesInput>;

  @Field(() => [RSVPScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<RSVPScalarWhereWithAggregatesInput>;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  userId?: IntWithAggregatesFilter;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  eventId?: IntWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  status?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;
}
