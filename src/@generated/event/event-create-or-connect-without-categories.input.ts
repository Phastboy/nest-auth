import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutCategoriesInput } from './event-create-without-categories.input';

@InputType()
export class EventCreateOrConnectWithoutCategoriesInput {
  @Field(() => EventWhereUniqueInput, { nullable: false })
  @Type(() => EventWhereUniqueInput)
  where!: Prisma.AtLeast<EventWhereUniqueInput, 'id' | 'postId'>;

  @Field(() => EventCreateWithoutCategoriesInput, { nullable: false })
  @Type(() => EventCreateWithoutCategoriesInput)
  create!: EventCreateWithoutCategoriesInput;
}
