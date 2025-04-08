import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventMode } from './event-mode.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumEventModeFilter } from './nested-enum-event-mode-filter.input';

@InputType()
export class NestedEnumEventModeWithAggregatesFilter {

    @Field(() => EventMode, {nullable:true})
    equals?: `${EventMode}`;

    @Field(() => [EventMode], {nullable:true})
    in?: Array<`${EventMode}`>;

    @Field(() => [EventMode], {nullable:true})
    notIn?: Array<`${EventMode}`>;

    @Field(() => NestedEnumEventModeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumEventModeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumEventModeFilter, {nullable:true})
    _min?: NestedEnumEventModeFilter;

    @Field(() => NestedEnumEventModeFilter, {nullable:true})
    _max?: NestedEnumEventModeFilter;
}
