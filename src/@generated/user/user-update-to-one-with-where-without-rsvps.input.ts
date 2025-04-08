import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutRsvpsInput } from './user-update-without-rsvps.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutRsvpsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutRsvpsInput, {nullable:false})
    @Type(() => UserUpdateWithoutRsvpsInput)
    data!: UserUpdateWithoutRsvpsInput;
}
