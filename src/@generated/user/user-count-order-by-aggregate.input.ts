import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UserCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  email?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  username?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  password?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  avatar?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  role?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  bio?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: `${SortOrder}`;
}
