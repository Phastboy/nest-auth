import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventUpdateWithoutCategoriesInput } from './event-update-without-categories.input';

@InputType()
export class EventUpdateWithWhereUniqueWithoutCategoriesInput {
  @Field(() => EventWhereUniqueInput, { nullable: false })
  @Type(() => EventWhereUniqueInput)
  where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

  @Field(() => EventUpdateWithoutCategoriesInput, { nullable: false })
  @Type(() => EventUpdateWithoutCategoriesInput)
  data!: EventUpdateWithoutCategoriesInput;
}
