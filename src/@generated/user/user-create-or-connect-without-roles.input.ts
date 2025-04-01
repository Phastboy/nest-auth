import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRolesInput } from './user-create-without-roles.input';

@InputType()
export class UserCreateOrConnectWithoutRolesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserCreateWithoutRolesInput, {nullable:false})
    @Type(() => UserCreateWithoutRolesInput)
    create!: UserCreateWithoutRolesInput;
}
