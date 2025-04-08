import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RoomListRelationFilter } from '../room/room-list-relation-filter.input';
import { EventListRelationFilter } from '../event/event-list-relation-filter.input';

@InputType()
export class BuildingWhereInput {

    @Field(() => [BuildingWhereInput], {nullable:true})
    AND?: Array<BuildingWhereInput>;

    @Field(() => [BuildingWhereInput], {nullable:true})
    OR?: Array<BuildingWhereInput>;

    @Field(() => [BuildingWhereInput], {nullable:true})
    NOT?: Array<BuildingWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    number?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    road?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    landmark?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    area?: StringNullableFilter;

    @Field(() => FloatFilter, {nullable:true})
    longitude?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    latitude?: FloatFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    capacity?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => RoomListRelationFilter, {nullable:true})
    rooms?: RoomListRelationFilter;

    @Field(() => EventListRelationFilter, {nullable:true})
    events?: EventListRelationFilter;
}
