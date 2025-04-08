import { registerEnumType } from '@nestjs/graphql';

export enum EventMode {
  PHYSICAL = 'PHYSICAL',
  VIRTUAL = 'VIRTUAL',
  HYBRID = 'HYBRID',
}

registerEnumType(EventMode, { name: 'EventMode', description: undefined });
