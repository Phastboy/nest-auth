import { registerEnumType } from '@nestjs/graphql';

export enum RSVPScalarFieldEnum {
    id = "id",
    userId = "userId",
    eventId = "eventId",
    status = "status",
    createdAt = "createdAt"
}


registerEnumType(RSVPScalarFieldEnum, { name: 'RSVPScalarFieldEnum', description: undefined })
