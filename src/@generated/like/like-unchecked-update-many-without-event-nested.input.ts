import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeCreateWithoutEventInput } from './like-create-without-event.input';
import { Type } from 'class-transformer';
import { LikeCreateOrConnectWithoutEventInput } from './like-create-or-connect-without-event.input';
import { LikeUpsertWithWhereUniqueWithoutEventInput } from './like-upsert-with-where-unique-without-event.input';
import { LikeCreateManyEventInputEnvelope } from './like-create-many-event-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { LikeUpdateWithWhereUniqueWithoutEventInput } from './like-update-with-where-unique-without-event.input';
import { LikeUpdateManyWithWhereWithoutEventInput } from './like-update-many-with-where-without-event.input';
import { LikeScalarWhereInput } from './like-scalar-where.input';

@InputType()
export class LikeUncheckedUpdateManyWithoutEventNestedInput {

    @Field(() => [LikeCreateWithoutEventInput], {nullable:true})
    @Type(() => LikeCreateWithoutEventInput)
    create?: Array<LikeCreateWithoutEventInput>;

    @Field(() => [LikeCreateOrConnectWithoutEventInput], {nullable:true})
    @Type(() => LikeCreateOrConnectWithoutEventInput)
    connectOrCreate?: Array<LikeCreateOrConnectWithoutEventInput>;

    @Field(() => [LikeUpsertWithWhereUniqueWithoutEventInput], {nullable:true})
    @Type(() => LikeUpsertWithWhereUniqueWithoutEventInput)
    upsert?: Array<LikeUpsertWithWhereUniqueWithoutEventInput>;

    @Field(() => LikeCreateManyEventInputEnvelope, {nullable:true})
    @Type(() => LikeCreateManyEventInputEnvelope)
    createMany?: LikeCreateManyEventInputEnvelope;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'userId_postId_eventId'>>;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'userId_postId_eventId'>>;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'userId_postId_eventId'>>;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'userId_postId_eventId'>>;

    @Field(() => [LikeUpdateWithWhereUniqueWithoutEventInput], {nullable:true})
    @Type(() => LikeUpdateWithWhereUniqueWithoutEventInput)
    update?: Array<LikeUpdateWithWhereUniqueWithoutEventInput>;

    @Field(() => [LikeUpdateManyWithWhereWithoutEventInput], {nullable:true})
    @Type(() => LikeUpdateManyWithWhereWithoutEventInput)
    updateMany?: Array<LikeUpdateManyWithWhereWithoutEventInput>;

    @Field(() => [LikeScalarWhereInput], {nullable:true})
    @Type(() => LikeScalarWhereInput)
    deleteMany?: Array<LikeScalarWhereInput>;
}
