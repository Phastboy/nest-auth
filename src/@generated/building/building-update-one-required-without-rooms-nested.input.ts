import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingCreateWithoutRoomsInput } from './building-create-without-rooms.input';
import { Type } from 'class-transformer';
import { BuildingCreateOrConnectWithoutRoomsInput } from './building-create-or-connect-without-rooms.input';
import { BuildingUpsertWithoutRoomsInput } from './building-upsert-without-rooms.input';
import { Prisma } from '@prisma/client';
import { BuildingWhereUniqueInput } from './building-where-unique.input';
import { BuildingUpdateToOneWithWhereWithoutRoomsInput } from './building-update-to-one-with-where-without-rooms.input';

@InputType()
export class BuildingUpdateOneRequiredWithoutRoomsNestedInput {

    @Field(() => BuildingCreateWithoutRoomsInput, {nullable:true})
    @Type(() => BuildingCreateWithoutRoomsInput)
    create?: BuildingCreateWithoutRoomsInput;

    @Field(() => BuildingCreateOrConnectWithoutRoomsInput, {nullable:true})
    @Type(() => BuildingCreateOrConnectWithoutRoomsInput)
    connectOrCreate?: BuildingCreateOrConnectWithoutRoomsInput;

    @Field(() => BuildingUpsertWithoutRoomsInput, {nullable:true})
    @Type(() => BuildingUpsertWithoutRoomsInput)
    upsert?: BuildingUpsertWithoutRoomsInput;

    @Field(() => BuildingWhereUniqueInput, {nullable:true})
    @Type(() => BuildingWhereUniqueInput)
    connect?: Prisma.AtLeast<BuildingWhereUniqueInput, 'id' | 'name'>;

    @Field(() => BuildingUpdateToOneWithWhereWithoutRoomsInput, {nullable:true})
    @Type(() => BuildingUpdateToOneWithWhereWithoutRoomsInput)
    update?: BuildingUpdateToOneWithWhereWithoutRoomsInput;
}
