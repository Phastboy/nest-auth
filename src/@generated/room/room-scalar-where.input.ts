import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class RoomScalarWhereInput {
  @Field(() => [RoomScalarWhereInput], { nullable: true })
  AND?: Array<RoomScalarWhereInput>;

  @Field(() => [RoomScalarWhereInput], { nullable: true })
  OR?: Array<RoomScalarWhereInput>;

  @Field(() => [RoomScalarWhereInput], { nullable: true })
  NOT?: Array<RoomScalarWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  buildingId?: IntFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  capacity?: IntNullableFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;
}
