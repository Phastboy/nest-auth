import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeCreateWithoutEventInput } from './like-create-without-event.input';
import { Type } from 'class-transformer';
import { LikeCreateOrConnectWithoutEventInput } from './like-create-or-connect-without-event.input';
import { LikeCreateManyEventInputEnvelope } from './like-create-many-event-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';

@InputType()
export class LikeUncheckedCreateNestedManyWithoutEventInput {

    @Field(() => [LikeCreateWithoutEventInput], {nullable:true})
    @Type(() => LikeCreateWithoutEventInput)
    create?: Array<LikeCreateWithoutEventInput>;

    @Field(() => [LikeCreateOrConnectWithoutEventInput], {nullable:true})
    @Type(() => LikeCreateOrConnectWithoutEventInput)
    connectOrCreate?: Array<LikeCreateOrConnectWithoutEventInput>;

    @Field(() => LikeCreateManyEventInputEnvelope, {nullable:true})
    @Type(() => LikeCreateManyEventInputEnvelope)
    createMany?: LikeCreateManyEventInputEnvelope;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'userId_postId_eventId'>>;
}
