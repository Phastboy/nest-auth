import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutRolesInput } from './user-update-without-roles.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutRolesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutRolesInput, {nullable:false})
    @Type(() => UserUpdateWithoutRolesInput)
    data!: UserUpdateWithoutRolesInput;
}
