import {
  ConflictException,
  NotFoundException,
  InternalServerErrorException,
  ForbiddenException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';

/**
 * Handles known errors (e.g., Prisma errors, NestJS exceptions).
 * @param {unknown} error - The error to handle.
 * @param {string} defaultMessage - A default message to be used if the error is unhandled.
 * @throws {InternalServerErrorException} - For unexpected errors.
 * @throws {ForbiddenException | NotFoundException | ConflictException} - For known errors.
 */
export function handleError(error: unknown, defaultMessage: string): never {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case 'P2002':
        const field = (error.meta?.target as string[])?.[0];
        throw new ConflictException(`${field} already exists`);
      case 'P2025':
        throw new NotFoundException('Record not found');
      case 'P2003':
        throw new ConflictException('Foreign key constraint failed');
      default:
        throw new InternalServerErrorException(
          `Database error: ${error.message}`,
        );
    }
  }

  if (
    error instanceof ForbiddenException ||
    error instanceof NotFoundException ||
    error instanceof ConflictException
  ) {
    throw error;
  }

  throw new InternalServerErrorException(
    `${defaultMessage}: ${error instanceof Error ? error.message : 'Unknown error'}`,
  );
}
