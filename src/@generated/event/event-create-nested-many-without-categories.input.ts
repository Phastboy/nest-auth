import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutCategoriesInput } from './event-create-without-categories.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutCategoriesInput } from './event-create-or-connect-without-categories.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';

@InputType()
export class EventCreateNestedManyWithoutCategoriesInput {
  @Field(() => [EventCreateWithoutCategoriesInput], { nullable: true })
  @Type(() => EventCreateWithoutCategoriesInput)
  create?: Array<EventCreateWithoutCategoriesInput>;

  @Field(() => [EventCreateOrConnectWithoutCategoriesInput], { nullable: true })
  @Type(() => EventCreateOrConnectWithoutCategoriesInput)
  connectOrCreate?: Array<EventCreateOrConnectWithoutCategoriesInput>;

  @Field(() => [EventWhereUniqueInput], { nullable: true })
  @Type(() => EventWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
}
