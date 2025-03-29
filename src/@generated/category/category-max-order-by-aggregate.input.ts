import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CategoryMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  name?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  slug?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  parentId?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: `${SortOrder}`;
}
