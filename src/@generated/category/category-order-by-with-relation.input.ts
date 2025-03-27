import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CategoryOrderByRelationAggregateInput } from './category-order-by-relation-aggregate.input';
import { PostOrderByRelationAggregateInput } from '../post/post-order-by-relation-aggregate.input';
import { EventOrderByRelationAggregateInput } from '../event/event-order-by-relation-aggregate.input';

@InputType()
export class CategoryOrderByWithRelationInput {

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

    @Field(() => CategoryOrderByWithRelationInput, {nullable:true})
    parent?: CategoryOrderByWithRelationInput;

    @Field(() => CategoryOrderByRelationAggregateInput, {nullable:true})
    children?: CategoryOrderByRelationAggregateInput;

    @Field(() => PostOrderByRelationAggregateInput, {nullable:true})
    posts?: PostOrderByRelationAggregateInput;

    @Field(() => EventOrderByRelationAggregateInput, {nullable:true})
    events?: EventOrderByRelationAggregateInput;
}
