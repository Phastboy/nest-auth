import { registerEnumType } from '@nestjs/graphql';

export enum BuildingScalarFieldEnum {
    id = "id",
    name = "name",
    number = "number",
    road = "road",
    landmark = "landmark",
    area = "area",
    longitude = "longitude",
    latitude = "latitude",
    capacity = "capacity",
    createdAt = "createdAt"
}


registerEnumType(BuildingScalarFieldEnum, { name: 'BuildingScalarFieldEnum', description: undefined })
