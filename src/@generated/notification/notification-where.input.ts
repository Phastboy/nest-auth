import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';

@InputType()
export class NotificationWhereInput {

    @Field(() => [NotificationWhereInput], {nullable:true})
    AND?: Array<NotificationWhereInput>;

    @Field(() => [NotificationWhereInput], {nullable:true})
    OR?: Array<NotificationWhereInput>;

    @Field(() => [NotificationWhereInput], {nullable:true})
    NOT?: Array<NotificationWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    type?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isRead?: BoolFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    referenceId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;
}
