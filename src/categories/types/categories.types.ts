import { Prisma } from "@prisma/client";

/**
 *  default relations to include when querying for categories.
 */
export const DEFAULT_CATEGORY_TO_BE_INCLUDED = {
  _count: true,
} satisfies Prisma.CategoryInclude;

/**
 * Represents a category entity with all default relations included.
 */
export type CategoryWithDefaultRelations = Prisma.CategoryGetPayload<{
    include: typeof DEFAULT_CATEGORY_TO_BE_INCLUDED;
}>;