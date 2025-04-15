import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventOccurrenceWhereInput } from './event-occurrence-where.input';
import { Type } from 'class-transformer';
import { EventOccurrenceOrderByWithRelationInput } from './event-occurrence-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EventOccurrenceWhereUniqueInput } from './event-occurrence-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EventOccurrenceScalarFieldEnum } from './event-occurrence-scalar-field.enum';

@ArgsType()
export class FindManyEventOccurrenceArgs {
  @Field(() => EventOccurrenceWhereInput, { nullable: true })
  @Type(() => EventOccurrenceWhereInput)
  where?: EventOccurrenceWhereInput;

  @Field(() => [EventOccurrenceOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<EventOccurrenceOrderByWithRelationInput>;

  @Field(() => EventOccurrenceWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<EventOccurrenceWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [EventOccurrenceScalarFieldEnum], { nullable: true })
  distinct?: Array<`${EventOccurrenceScalarFieldEnum}`>;
}
