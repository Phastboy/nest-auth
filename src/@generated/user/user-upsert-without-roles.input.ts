import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutRolesInput } from './user-update-without-roles.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRolesInput } from './user-create-without-roles.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutRolesInput {

    @Field(() => UserUpdateWithoutRolesInput, {nullable:false})
    @Type(() => UserUpdateWithoutRolesInput)
    update!: UserUpdateWithoutRolesInput;

    @Field(() => UserCreateWithoutRolesInput, {nullable:false})
    @Type(() => UserCreateWithoutRolesInput)
    create!: UserCreateWithoutRolesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
