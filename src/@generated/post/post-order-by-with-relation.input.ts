import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class PostOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  content?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  userId?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: `${SortOrder}`;

  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  user?: UserOrderByWithRelationInput;
}
