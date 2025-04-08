import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventMode } from './event-mode.enum';
import { NestedEnumEventModeFilter } from './nested-enum-event-mode-filter.input';

@InputType()
export class EnumEventModeFilter {

    @Field(() => EventMode, {nullable:true})
    equals?: `${EventMode}`;

    @Field(() => [EventMode], {nullable:true})
    in?: Array<`${EventMode}`>;

    @Field(() => [EventMode], {nullable:true})
    notIn?: Array<`${EventMode}`>;

    @Field(() => NestedEnumEventModeFilter, {nullable:true})
    not?: NestedEnumEventModeFilter;
}
