import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutEventInput } from './comment-create-without-event.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutEventInput } from './comment-create-or-connect-without-event.input';
import { CommentUpsertWithWhereUniqueWithoutEventInput } from './comment-upsert-with-where-unique-without-event.input';
import { CommentCreateManyEventInputEnvelope } from './comment-create-many-event-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutEventInput } from './comment-update-with-where-unique-without-event.input';
import { CommentUpdateManyWithWhereWithoutEventInput } from './comment-update-many-with-where-without-event.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';

@InputType()
export class CommentUpdateManyWithoutEventNestedInput {

    @Field(() => [CommentCreateWithoutEventInput], {nullable:true})
    @Type(() => CommentCreateWithoutEventInput)
    create?: Array<CommentCreateWithoutEventInput>;

    @Field(() => [CommentCreateOrConnectWithoutEventInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutEventInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutEventInput>;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutEventInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutEventInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutEventInput>;

    @Field(() => CommentCreateManyEventInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyEventInputEnvelope)
    createMany?: CommentCreateManyEventInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentUpdateWithWhereUniqueWithoutEventInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutEventInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutEventInput>;

    @Field(() => [CommentUpdateManyWithWhereWithoutEventInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutEventInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutEventInput>;

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}
