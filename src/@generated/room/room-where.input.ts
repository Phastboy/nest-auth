import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BuildingScalarRelationFilter } from '../building/building-scalar-relation-filter.input';
import { EventListRelationFilter } from '../event/event-list-relation-filter.input';

@InputType()
export class RoomWhereInput {

    @Field(() => [RoomWhereInput], {nullable:true})
    AND?: Array<RoomWhereInput>;

    @Field(() => [RoomWhereInput], {nullable:true})
    OR?: Array<RoomWhereInput>;

    @Field(() => [RoomWhereInput], {nullable:true})
    NOT?: Array<RoomWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    buildingId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    capacity?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => BuildingScalarRelationFilter, {nullable:true})
    building?: BuildingScalarRelationFilter;

    @Field(() => EventListRelationFilter, {nullable:true})
    events?: EventListRelationFilter;
}
