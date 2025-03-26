import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RSVPWhereInput } from '../rsvp/rsvp-where.input';
import { Type } from 'class-transformer';
import { RSVPOrderByWithAggregationInput } from '../rsvp/rsvp-order-by-with-aggregation.input';
import { RSVPScalarFieldEnum } from '../rsvp/rsvp-scalar-field.enum';
import { RSVPScalarWhereWithAggregatesInput } from '../rsvp/rsvp-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByRsvpArgs {
  @Field(() => RSVPWhereInput, { nullable: true })
  @Type(() => RSVPWhereInput)
  where?: RSVPWhereInput;

  @Field(() => [RSVPOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<RSVPOrderByWithAggregationInput>;

  @Field(() => [RSVPScalarFieldEnum], { nullable: false })
  by!: Array<`${RSVPScalarFieldEnum}`>;

  @Field(() => RSVPScalarWhereWithAggregatesInput, { nullable: true })
  having?: RSVPScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
