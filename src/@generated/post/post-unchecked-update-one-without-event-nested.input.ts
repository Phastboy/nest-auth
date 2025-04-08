import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutEventInput } from './post-create-without-event.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutEventInput } from './post-create-or-connect-without-event.input';
import { PostUpsertWithoutEventInput } from './post-upsert-without-event.input';
import { PostWhereInput } from './post-where.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostUpdateToOneWithWhereWithoutEventInput } from './post-update-to-one-with-where-without-event.input';

@InputType()
export class PostUncheckedUpdateOneWithoutEventNestedInput {

    @Field(() => PostCreateWithoutEventInput, {nullable:true})
    @Type(() => PostCreateWithoutEventInput)
    create?: PostCreateWithoutEventInput;

    @Field(() => PostCreateOrConnectWithoutEventInput, {nullable:true})
    @Type(() => PostCreateOrConnectWithoutEventInput)
    connectOrCreate?: PostCreateOrConnectWithoutEventInput;

    @Field(() => PostUpsertWithoutEventInput, {nullable:true})
    @Type(() => PostUpsertWithoutEventInput)
    upsert?: PostUpsertWithoutEventInput;

    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    disconnect?: PostWhereInput;

    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    delete?: PostWhereInput;

    @Field(() => PostWhereUniqueInput, {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'eventId'>;

    @Field(() => PostUpdateToOneWithWhereWithoutEventInput, {nullable:true})
    @Type(() => PostUpdateToOneWithWhereWithoutEventInput)
    update?: PostUpdateToOneWithWhereWithoutEventInput;
}
