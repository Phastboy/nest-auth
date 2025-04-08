import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingCreateWithoutEventsInput } from './building-create-without-events.input';
import { Type } from 'class-transformer';
import { BuildingCreateOrConnectWithoutEventsInput } from './building-create-or-connect-without-events.input';
import { Prisma } from '@prisma/client';
import { BuildingWhereUniqueInput } from './building-where-unique.input';

@InputType()
export class BuildingCreateNestedOneWithoutEventsInput {

    @Field(() => BuildingCreateWithoutEventsInput, {nullable:true})
    @Type(() => BuildingCreateWithoutEventsInput)
    create?: BuildingCreateWithoutEventsInput;

    @Field(() => BuildingCreateOrConnectWithoutEventsInput, {nullable:true})
    @Type(() => BuildingCreateOrConnectWithoutEventsInput)
    connectOrCreate?: BuildingCreateOrConnectWithoutEventsInput;

    @Field(() => BuildingWhereUniqueInput, {nullable:true})
    @Type(() => BuildingWhereUniqueInput)
    connect?: Prisma.AtLeast<BuildingWhereUniqueInput, 'id' | 'name'>;
}
