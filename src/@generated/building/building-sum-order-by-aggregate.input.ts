import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BuildingSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  number?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  longitude?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  latitude?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  capacity?: `${SortOrder}`;
}
