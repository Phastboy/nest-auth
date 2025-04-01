import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutEventsInput } from './category-create-without-events.input';

@InputType()
export class CategoryCreateOrConnectWithoutEventsInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name' | 'slug'>;

    @Field(() => CategoryCreateWithoutEventsInput, {nullable:false})
    @Type(() => CategoryCreateWithoutEventsInput)
    create!: CategoryCreateWithoutEventsInput;
}
