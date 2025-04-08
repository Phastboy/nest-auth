import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventStatus } from './event-status.enum';
import { NestedEnumEventStatusFilter } from './nested-enum-event-status-filter.input';

@InputType()
export class EnumEventStatusFilter {

    @Field(() => EventStatus, {nullable:true})
    equals?: `${EventStatus}`;

    @Field(() => [EventStatus], {nullable:true})
    in?: Array<`${EventStatus}`>;

    @Field(() => [EventStatus], {nullable:true})
    notIn?: Array<`${EventStatus}`>;

    @Field(() => NestedEnumEventStatusFilter, {nullable:true})
    not?: NestedEnumEventStatusFilter;
}
