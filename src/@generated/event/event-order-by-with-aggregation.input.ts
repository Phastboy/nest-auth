import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { EventCountOrderByAggregateInput } from './event-count-order-by-aggregate.input';
import { EventAvgOrderByAggregateInput } from './event-avg-order-by-aggregate.input';
import { EventMaxOrderByAggregateInput } from './event-max-order-by-aggregate.input';
import { EventMinOrderByAggregateInput } from './event-min-order-by-aggregate.input';
import { EventSumOrderByAggregateInput } from './event-sum-order-by-aggregate.input';

@InputType()
export class EventOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    startTime?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    endTime?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    image?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isRecurring?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    recurrenceRule?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isPublic?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    shareAsPost?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    eventStatus?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    eventMode?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    eventType?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    eventLink?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    roomId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    buildingId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => EventCountOrderByAggregateInput, {nullable:true})
    _count?: EventCountOrderByAggregateInput;

    @Field(() => EventAvgOrderByAggregateInput, {nullable:true})
    _avg?: EventAvgOrderByAggregateInput;

    @Field(() => EventMaxOrderByAggregateInput, {nullable:true})
    _max?: EventMaxOrderByAggregateInput;

    @Field(() => EventMinOrderByAggregateInput, {nullable:true})
    _min?: EventMinOrderByAggregateInput;

    @Field(() => EventSumOrderByAggregateInput, {nullable:true})
    _sum?: EventSumOrderByAggregateInput;
}
