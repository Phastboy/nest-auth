import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class EventMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  title?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  description?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  image?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  isRecurring?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  recurrenceRule?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  isPublic?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  active?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  userId?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  shareAsPost?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  eventMode?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  eventType?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  eventLink?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: `${SortOrder}`;
}
