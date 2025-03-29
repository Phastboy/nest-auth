import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class NotificationOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  userId?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  type?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  content?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  isRead?: `${SortOrder}`;

  @Field(() => SortOrderInput, { nullable: true })
  referenceId?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: `${SortOrder}`;

  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  user?: UserOrderByWithRelationInput;
}
