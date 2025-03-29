import {
  ConflictException,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
  ServiceUnavailableException,
  ForbiddenException,
  Logger,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';

interface ErrorContext {
  context: string;
  metadata?: Record<string, any>;
  stack?: string;
  timestamp?: string;
}

export function handleError(
  error: unknown,
  context: string,
  metadata?: Record<string, any>,
  defaultMessage?: string,
): never {
  // Handle Prisma errors first
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    handlePrismaError(error, context, metadata);
  }

  if (error instanceof Prisma.PrismaClientValidationError) {
    throw new BadRequestException({
      message: 'Database validation failed',
      context,
      details: error.message.replace(/\n/g, ' '),
      ...metadata,
    });
  }

  // Handle specific NestJS exceptions
  if (
    error instanceof ConflictException ||
    error instanceof NotFoundException ||
    error instanceof BadRequestException ||
    error instanceof ForbiddenException
  ) {
    throw error; // Re-throw known exceptions as-is
  }

  // Handle generic Error
  if (error instanceof Error) {
    throw new InternalServerErrorException({
      message: defaultMessage || `Unexpected error: ${error.message}`,
      context,
      stack: process.env.NODE_ENV !== 'production' ? error.stack : undefined,
      ...metadata,
    });
  }

  // Fallback for unknown error types
  throw new InternalServerErrorException({
    message: defaultMessage || 'Unknown error occurred',
    context,
    ...metadata,
  });
}

export function handleCriticalError(
  error: unknown,
  context: string,
  metadata?: Record<string, any>,
): never {
  const logger = new Logger('CriticalError');
  const errorContext: ErrorContext = {
    context,
    metadata,
    stack: error instanceof Error ? error.stack : undefined,
    timestamp: new Date().toISOString(),
  };

  logger.error(JSON.stringify(errorContext));

  // Ensure process exits even if error throwing fails
  if (process.env.NODE_ENV !== 'test') {
    process.nextTick(() => process.exit(1));
  }
  
  // Fallback throw
  throw new Error(`Critical error in ${context}`);
}

export function handleWarning(
  error: unknown,
  context: string,
  metadata?: Record<string, any>,
): void {
  const logger = new Logger('Warning');
  const message = error instanceof Error ? error.message : String(error);
  
  logger.warn({
    message,
    context,
    metadata,
    timestamp: new Date().toISOString(),
  });
}

export function handleValidationError(
  errors: Record<string, string[]>,
  context: string,
  metadata?: Record<string, any>,
): never {
  throw new BadRequestException({
    message: 'Validation failed',
    context,
    errors,
    timestamp: new Date().toISOString(),
    ...metadata,
  });
}

function handlePrismaError(
  error: Prisma.PrismaClientKnownRequestError,
  context: string,
  metadata?: Record<string, any>,
): never {
  const meta = {
    prismaCode: error.code,
    prismaMeta: error.meta,
    context,
    timestamp: new Date().toISOString(),
    ...metadata,
  };

  switch (error.code) {
    case 'P2002':
      const field = (error.meta?.target as string[])?.[0];
      throw new ConflictException({
        message: field ? `${field} already exists` : 'Unique constraint violation',
        ...meta,
      });
    case 'P2025':
      throw new NotFoundException({
        message: 'Record not found',
        ...meta,
      });
    case 'P2003':
      throw new ConflictException({
        message: 'Foreign key constraint failed',
        ...meta,
      });
    case 'P2000':
      throw new BadRequestException({
        message: 'Input data is too long',
        ...meta,
      });
    case 'P2001':
      throw new NotFoundException({
        message: 'Record does not exist',
        ...meta,
      });
    case 'P2016':
      throw new BadRequestException({
        message: 'Query interpretation error',
        ...meta,
      });
    case 'P2021':
      throw new ServiceUnavailableException({
        message: 'Database table does not exist',
        ...meta,
      });
    case 'P2022':
      throw new ServiceUnavailableException({
        message: 'Database column does not exist',
        ...meta,
      });
    default:
      throw new InternalServerErrorException({
        message: 'Database operation failed',
        ...meta,
      });
  }
}