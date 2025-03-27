import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CategoryCountOrderByAggregateInput } from './category-count-order-by-aggregate.input';
import { CategoryAvgOrderByAggregateInput } from './category-avg-order-by-aggregate.input';
import { CategoryMaxOrderByAggregateInput } from './category-max-order-by-aggregate.input';
import { CategoryMinOrderByAggregateInput } from './category-min-order-by-aggregate.input';
import { CategorySumOrderByAggregateInput } from './category-sum-order-by-aggregate.input';

@InputType()
export class CategoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    slug?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    parentId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => CategoryCountOrderByAggregateInput, {nullable:true})
    _count?: CategoryCountOrderByAggregateInput;

    @Field(() => CategoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: CategoryAvgOrderByAggregateInput;

    @Field(() => CategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: CategoryMaxOrderByAggregateInput;

    @Field(() => CategoryMinOrderByAggregateInput, {nullable:true})
    _min?: CategoryMinOrderByAggregateInput;

    @Field(() => CategorySumOrderByAggregateInput, {nullable:true})
    _sum?: CategorySumOrderByAggregateInput;
}
