import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutLikesInput } from './event-create-without-likes.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutLikesInput } from './event-create-or-connect-without-likes.input';
import { EventUpsertWithoutLikesInput } from './event-upsert-without-likes.input';
import { EventWhereInput } from './event-where.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateToOneWithWhereWithoutLikesInput } from './event-update-to-one-with-where-without-likes.input';

@InputType()
export class EventUpdateOneWithoutLikesNestedInput {
  @Field(() => EventCreateWithoutLikesInput, { nullable: true })
  @Type(() => EventCreateWithoutLikesInput)
  create?: EventCreateWithoutLikesInput;

  @Field(() => EventCreateOrConnectWithoutLikesInput, { nullable: true })
  @Type(() => EventCreateOrConnectWithoutLikesInput)
  connectOrCreate?: EventCreateOrConnectWithoutLikesInput;

  @Field(() => EventUpsertWithoutLikesInput, { nullable: true })
  @Type(() => EventUpsertWithoutLikesInput)
  upsert?: EventUpsertWithoutLikesInput;

  @Field(() => EventWhereInput, { nullable: true })
  @Type(() => EventWhereInput)
  disconnect?: EventWhereInput;

  @Field(() => EventWhereInput, { nullable: true })
  @Type(() => EventWhereInput)
  delete?: EventWhereInput;

  @Field(() => EventWhereUniqueInput, { nullable: true })
  @Type(() => EventWhereUniqueInput)
  connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

  @Field(() => EventUpdateToOneWithWhereWithoutLikesInput, { nullable: true })
  @Type(() => EventUpdateToOneWithWhereWithoutLikesInput)
  update?: EventUpdateToOneWithWhereWithoutLikesInput;
}
