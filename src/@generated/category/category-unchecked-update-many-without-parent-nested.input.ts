import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutParentInput } from './category-create-without-parent.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutParentInput } from './category-create-or-connect-without-parent.input';
import { CategoryUpsertWithWhereUniqueWithoutParentInput } from './category-upsert-with-where-unique-without-parent.input';
import { CategoryCreateManyParentInputEnvelope } from './category-create-many-parent-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithWhereUniqueWithoutParentInput } from './category-update-with-where-unique-without-parent.input';
import { CategoryUpdateManyWithWhereWithoutParentInput } from './category-update-many-with-where-without-parent.input';
import { CategoryScalarWhereInput } from './category-scalar-where.input';

@InputType()
export class CategoryUncheckedUpdateManyWithoutParentNestedInput {

    @Field(() => [CategoryCreateWithoutParentInput], {nullable:true})
    @Type(() => CategoryCreateWithoutParentInput)
    create?: Array<CategoryCreateWithoutParentInput>;

    @Field(() => [CategoryCreateOrConnectWithoutParentInput], {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutParentInput)
    connectOrCreate?: Array<CategoryCreateOrConnectWithoutParentInput>;

    @Field(() => [CategoryUpsertWithWhereUniqueWithoutParentInput], {nullable:true})
    @Type(() => CategoryUpsertWithWhereUniqueWithoutParentInput)
    upsert?: Array<CategoryUpsertWithWhereUniqueWithoutParentInput>;

    @Field(() => CategoryCreateManyParentInputEnvelope, {nullable:true})
    @Type(() => CategoryCreateManyParentInputEnvelope)
    createMany?: CategoryCreateManyParentInputEnvelope;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name' | 'slug'>>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name' | 'slug'>>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name' | 'slug'>>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name' | 'slug'>>;

    @Field(() => [CategoryUpdateWithWhereUniqueWithoutParentInput], {nullable:true})
    @Type(() => CategoryUpdateWithWhereUniqueWithoutParentInput)
    update?: Array<CategoryUpdateWithWhereUniqueWithoutParentInput>;

    @Field(() => [CategoryUpdateManyWithWhereWithoutParentInput], {nullable:true})
    @Type(() => CategoryUpdateManyWithWhereWithoutParentInput)
    updateMany?: Array<CategoryUpdateManyWithWhereWithoutParentInput>;

    @Field(() => [CategoryScalarWhereInput], {nullable:true})
    @Type(() => CategoryScalarWhereInput)
    deleteMany?: Array<CategoryScalarWhereInput>;
}
