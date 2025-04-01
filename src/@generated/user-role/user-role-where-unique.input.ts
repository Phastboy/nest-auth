import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRoleUserIdRoleIdCompoundUniqueInput } from './user-role-user-id-role-id-compound-unique.input';
import { UserRoleWhereInput } from './user-role-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { RoleScalarRelationFilter } from '../role/role-scalar-relation-filter.input';

@InputType()
export class UserRoleWhereUniqueInput {

    @Field(() => UserRoleUserIdRoleIdCompoundUniqueInput, {nullable:true})
    userId_roleId?: UserRoleUserIdRoleIdCompoundUniqueInput;

    @Field(() => [UserRoleWhereInput], {nullable:true})
    AND?: Array<UserRoleWhereInput>;

    @Field(() => [UserRoleWhereInput], {nullable:true})
    OR?: Array<UserRoleWhereInput>;

    @Field(() => [UserRoleWhereInput], {nullable:true})
    NOT?: Array<UserRoleWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    roleId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;

    @Field(() => RoleScalarRelationFilter, {nullable:true})
    role?: RoleScalarRelationFilter;
}
