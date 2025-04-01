import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoryUpdateManyMutationInput } from './category-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CategoryWhereInput } from './category-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyCategoryArgs {

    @Field(() => CategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => CategoryUpdateManyMutationInput)
    data!: CategoryUpdateManyMutationInput;

    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: CategoryWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
