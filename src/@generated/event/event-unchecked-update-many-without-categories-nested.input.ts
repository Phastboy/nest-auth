import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutCategoriesInput } from './event-create-without-categories.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutCategoriesInput } from './event-create-or-connect-without-categories.input';
import { EventUpsertWithWhereUniqueWithoutCategoriesInput } from './event-upsert-with-where-unique-without-categories.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateWithWhereUniqueWithoutCategoriesInput } from './event-update-with-where-unique-without-categories.input';
import { EventUpdateManyWithWhereWithoutCategoriesInput } from './event-update-many-with-where-without-categories.input';
import { EventScalarWhereInput } from './event-scalar-where.input';

@InputType()
export class EventUncheckedUpdateManyWithoutCategoriesNestedInput {
  @Field(() => [EventCreateWithoutCategoriesInput], { nullable: true })
  @Type(() => EventCreateWithoutCategoriesInput)
  create?: Array<EventCreateWithoutCategoriesInput>;

  @Field(() => [EventCreateOrConnectWithoutCategoriesInput], { nullable: true })
  @Type(() => EventCreateOrConnectWithoutCategoriesInput)
  connectOrCreate?: Array<EventCreateOrConnectWithoutCategoriesInput>;

  @Field(() => [EventUpsertWithWhereUniqueWithoutCategoriesInput], {
    nullable: true,
  })
  @Type(() => EventUpsertWithWhereUniqueWithoutCategoriesInput)
  upsert?: Array<EventUpsertWithWhereUniqueWithoutCategoriesInput>;

  @Field(() => [EventWhereUniqueInput], { nullable: true })
  @Type(() => EventWhereUniqueInput)
  set?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;

  @Field(() => [EventWhereUniqueInput], { nullable: true })
  @Type(() => EventWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;

  @Field(() => [EventWhereUniqueInput], { nullable: true })
  @Type(() => EventWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;

  @Field(() => [EventWhereUniqueInput], { nullable: true })
  @Type(() => EventWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;

  @Field(() => [EventUpdateWithWhereUniqueWithoutCategoriesInput], {
    nullable: true,
  })
  @Type(() => EventUpdateWithWhereUniqueWithoutCategoriesInput)
  update?: Array<EventUpdateWithWhereUniqueWithoutCategoriesInput>;

  @Field(() => [EventUpdateManyWithWhereWithoutCategoriesInput], {
    nullable: true,
  })
  @Type(() => EventUpdateManyWithWhereWithoutCategoriesInput)
  updateMany?: Array<EventUpdateManyWithWhereWithoutCategoriesInput>;

  @Field(() => [EventScalarWhereInput], { nullable: true })
  @Type(() => EventScalarWhereInput)
  deleteMany?: Array<EventScalarWhereInput>;
}
