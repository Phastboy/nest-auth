import { registerEnumType } from '@nestjs/graphql';

export enum RoomScalarFieldEnum {
    id = "id",
    name = "name",
    buildingId = "buildingId",
    capacity = "capacity",
    createdAt = "createdAt"
}


registerEnumType(RoomScalarFieldEnum, { name: 'RoomScalarFieldEnum', description: undefined })
