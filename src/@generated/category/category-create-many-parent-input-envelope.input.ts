import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateManyParentInput } from './category-create-many-parent.input';
import { Type } from 'class-transformer';

@InputType()
export class CategoryCreateManyParentInputEnvelope {

    @Field(() => [CategoryCreateManyParentInput], {nullable:false})
    @Type(() => CategoryCreateManyParentInput)
    data!: Array<CategoryCreateManyParentInput>;
}
