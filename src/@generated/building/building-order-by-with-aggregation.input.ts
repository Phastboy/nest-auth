import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BuildingCountOrderByAggregateInput } from './building-count-order-by-aggregate.input';
import { BuildingAvgOrderByAggregateInput } from './building-avg-order-by-aggregate.input';
import { BuildingMaxOrderByAggregateInput } from './building-max-order-by-aggregate.input';
import { BuildingMinOrderByAggregateInput } from './building-min-order-by-aggregate.input';
import { BuildingSumOrderByAggregateInput } from './building-sum-order-by-aggregate.input';

@InputType()
export class BuildingOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    number?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    road?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    landmark?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    area?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    longitude?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    latitude?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    capacity?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => BuildingCountOrderByAggregateInput, {nullable:true})
    _count?: BuildingCountOrderByAggregateInput;

    @Field(() => BuildingAvgOrderByAggregateInput, {nullable:true})
    _avg?: BuildingAvgOrderByAggregateInput;

    @Field(() => BuildingMaxOrderByAggregateInput, {nullable:true})
    _max?: BuildingMaxOrderByAggregateInput;

    @Field(() => BuildingMinOrderByAggregateInput, {nullable:true})
    _min?: BuildingMinOrderByAggregateInput;

    @Field(() => BuildingSumOrderByAggregateInput, {nullable:true})
    _sum?: BuildingSumOrderByAggregateInput;
}
