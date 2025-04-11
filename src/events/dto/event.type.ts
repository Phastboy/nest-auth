import { Prisma } from '@prisma/client';

export const DEFAULT_EVENT_RELATIONS_TO_BE_INCLUDED = {
  categories: true,
  _count: true,
} satisfies Prisma.EventInclude;
export type EventWithDefaultRelations = Prisma.EventGetPayload<{
  include: typeof DEFAULT_EVENT_RELATIONS_TO_BE_INCLUDED;
}>;
