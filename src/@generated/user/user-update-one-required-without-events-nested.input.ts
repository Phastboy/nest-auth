import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEventsInput } from './user-create-without-events.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutEventsInput } from './user-create-or-connect-without-events.input';
import { UserUpsertWithoutEventsInput } from './user-upsert-without-events.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutEventsInput } from './user-update-to-one-with-where-without-events.input';

@InputType()
export class UserUpdateOneRequiredWithoutEventsNestedInput {

    @Field(() => UserCreateWithoutEventsInput, {nullable:true})
    @Type(() => UserCreateWithoutEventsInput)
    create?: UserCreateWithoutEventsInput;

    @Field(() => UserCreateOrConnectWithoutEventsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutEventsInput)
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput;

    @Field(() => UserUpsertWithoutEventsInput, {nullable:true})
    @Type(() => UserUpsertWithoutEventsInput)
    upsert?: UserUpsertWithoutEventsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserUpdateToOneWithWhereWithoutEventsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutEventsInput)
    update?: UserUpdateToOneWithWhereWithoutEventsInput;
}
