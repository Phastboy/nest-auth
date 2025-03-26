import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutLikesInput } from './event-create-without-likes.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutLikesInput } from './event-create-or-connect-without-likes.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';

@InputType()
export class EventCreateNestedOneWithoutLikesInput {
  @Field(() => EventCreateWithoutLikesInput, { nullable: true })
  @Type(() => EventCreateWithoutLikesInput)
  create?: EventCreateWithoutLikesInput;

  @Field(() => EventCreateOrConnectWithoutLikesInput, { nullable: true })
  @Type(() => EventCreateOrConnectWithoutLikesInput)
  connectOrCreate?: EventCreateOrConnectWithoutLikesInput;

  @Field(() => EventWhereUniqueInput, { nullable: true })
  @Type(() => EventWhereUniqueInput)
  connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id' | 'postId'>;
}
