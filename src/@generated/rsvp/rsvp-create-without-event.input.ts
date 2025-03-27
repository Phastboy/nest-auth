import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutRsvpsInput } from '../user/user-create-nested-one-without-rsvps.input';

@InputType()
export class RSVPCreateWithoutEventInput {

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutRsvpsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutRsvpsInput;
}
