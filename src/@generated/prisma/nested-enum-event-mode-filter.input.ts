import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventMode } from './event-mode.enum';

@InputType()
export class NestedEnumEventModeFilter {

    @Field(() => EventMode, {nullable:true})
    equals?: `${EventMode}`;

    @Field(() => [EventMode], {nullable:true})
    in?: Array<`${EventMode}`>;

    @Field(() => [EventMode], {nullable:true})
    notIn?: Array<`${EventMode}`>;

    @Field(() => NestedEnumEventModeFilter, {nullable:true})
    not?: NestedEnumEventModeFilter;
}
