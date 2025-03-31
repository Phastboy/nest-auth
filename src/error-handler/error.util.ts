import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  InternalServerErrorException,
  NotFoundException,
  ServiceUnavailableException,
  UnauthorizedException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import {
  JsonWebTokenError,
  TokenExpiredError,
  NotBeforeError,
} from 'jsonwebtoken';
import { AppLogger } from '../app.logger';

type ErrorContext = {
  operation?: string;
  service?: string;
  [key: string]: any;
};

export class ErrorHandler {
  private readonly logger = AppLogger.getInstance(ErrorHandler.name);

  constructor() {}

  async handleCriticalError(
    error: unknown,
    context: ErrorContext = {},
    app?: any,
  ): Promise<never> {
    this.logger.critical('Critical error encountered', {
      error,
      metadata: context,
    });

    if (app && app.close) {
      await app.close();
    }
    process.exit(1);
  }

  handleError(
    error: unknown,
    context: ErrorContext = {},
    defaultMessage?: string,
  ): never {
    const errorMessage =
      error instanceof Error ? error.message : 'An unexpected error occurred';

    this.logger.logError(
      `Error in ${context.service}.${context.operation}: ${errorMessage}`,
      {
        error,
        metadata: context,
      },
    );

    // Handle Prisma Errors
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      this.handlePrismaError(error, context);
    }

    if (error instanceof Prisma.PrismaClientValidationError) {
      throw new BadRequestException('Database validation failed');
    }

    // ✅ Handle JWT Errors
    if (error instanceof JsonWebTokenError) {
      throw new UnauthorizedException('Invalid token');
    }

    if (error instanceof TokenExpiredError) {
      throw new UnauthorizedException('Token has expired');
    }

    if (error instanceof NotBeforeError) {
      throw new UnauthorizedException('Token is not yet valid');
    }

    // Handle NestJS Exceptions
    if (
      error instanceof ConflictException ||
      error instanceof NotFoundException ||
      error instanceof BadRequestException ||
      error instanceof ForbiddenException ||
      error instanceof ServiceUnavailableException ||
      error instanceof InternalServerErrorException ||
      error instanceof UnauthorizedException
    ) {
      throw error;
    }

    // Default Internal Server Error
    throw new InternalServerErrorException(
      defaultMessage || 'An unexpected error occurred',
      {
        description: 'An unknown error occurred',
      },
    );
  }

  private handlePrismaError(
    error: Prisma.PrismaClientKnownRequestError,
    context: ErrorContext,
  ): never {
    const meta = {
      prismaCode: error.code,
      prismaMeta: error.meta,
      timestamp: new Date().toISOString(),
      ...context,
    };

    this.logger.logError('Prisma error encountered', {
      error,
      metadata: meta,
    });

    switch (error.code) {
      case 'P2002':
        const field = (error.meta?.target as string[])?.[0];
        throw new ConflictException(
          field ? `${field} already exists` : 'Unique constraint violation',
        );
      case 'P2025':
        throw new NotFoundException('Record not found');
      case 'P2003':
        throw new ConflictException('Foreign key constraint failed');
      case 'P2000':
        throw new BadRequestException('Input data is too long');
      case 'P2001':
        throw new NotFoundException('Record does not exist');
      case 'P2016':
        throw new BadRequestException('Query interpretation error');
      case 'P2021':
        throw new ServiceUnavailableException('Database table does not exist');
      case 'P2022':
        throw new ServiceUnavailableException('Database column does not exist');
      default:
        throw new InternalServerErrorException('Database operation failed');
    }
  }
}
