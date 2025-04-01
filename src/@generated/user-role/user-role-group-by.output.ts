import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserRoleCountAggregate } from './user-role-count-aggregate.output';
import { UserRoleAvgAggregate } from './user-role-avg-aggregate.output';
import { UserRoleSumAggregate } from './user-role-sum-aggregate.output';
import { UserRoleMinAggregate } from './user-role-min-aggregate.output';
import { UserRoleMaxAggregate } from './user-role-max-aggregate.output';

@ObjectType()
export class UserRoleGroupBy {

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    roleId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => UserRoleCountAggregate, {nullable:true})
    _count?: UserRoleCountAggregate;

    @Field(() => UserRoleAvgAggregate, {nullable:true})
    _avg?: UserRoleAvgAggregate;

    @Field(() => UserRoleSumAggregate, {nullable:true})
    _sum?: UserRoleSumAggregate;

    @Field(() => UserRoleMinAggregate, {nullable:true})
    _min?: UserRoleMinAggregate;

    @Field(() => UserRoleMaxAggregate, {nullable:true})
    _max?: UserRoleMaxAggregate;
}
