import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { EventOrderByWithRelationInput } from '../event/event-order-by-with-relation.input';

@InputType()
export class RSVPOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  userId?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  eventId?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  status?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: `${SortOrder}`;

  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  user?: UserOrderByWithRelationInput;

  @Field(() => EventOrderByWithRelationInput, { nullable: true })
  event?: EventOrderByWithRelationInput;
}
