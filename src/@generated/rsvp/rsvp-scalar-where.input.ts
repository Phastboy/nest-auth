import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class RSVPScalarWhereInput {
  @Field(() => [RSVPScalarWhereInput], { nullable: true })
  AND?: Array<RSVPScalarWhereInput>;

  @Field(() => [RSVPScalarWhereInput], { nullable: true })
  OR?: Array<RSVPScalarWhereInput>;

  @Field(() => [RSVPScalarWhereInput], { nullable: true })
  NOT?: Array<RSVPScalarWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  userId?: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  eventId?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  status?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;
}
