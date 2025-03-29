import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RSVPUserIdEventIdCompoundUniqueInput } from './rsvp-user-id-event-id-compound-unique.input';
import { RSVPWhereInput } from './rsvp-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { EventScalarRelationFilter } from '../event/event-scalar-relation-filter.input';

@InputType()
export class RSVPWhereUniqueInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => RSVPUserIdEventIdCompoundUniqueInput, { nullable: true })
  userId_eventId?: RSVPUserIdEventIdCompoundUniqueInput;

  @Field(() => [RSVPWhereInput], { nullable: true })
  AND?: Array<RSVPWhereInput>;

  @Field(() => [RSVPWhereInput], { nullable: true })
  OR?: Array<RSVPWhereInput>;

  @Field(() => [RSVPWhereInput], { nullable: true })
  NOT?: Array<RSVPWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  userId?: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  eventId?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  status?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => UserScalarRelationFilter, { nullable: true })
  user?: UserScalarRelationFilter;

  @Field(() => EventScalarRelationFilter, { nullable: true })
  event?: EventScalarRelationFilter;
}
