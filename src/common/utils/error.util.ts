import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  InternalServerErrorException,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AppLogger } from '../../app.logger';
import { HttpStatus } from '@nestjs/common';

type ErrorContext = {
  operation?: string;
  service?: string;
  [key: string]: any;
};

export class ErrorHandler {
  private readonly logger = AppLogger.getInstance(ErrorHandler.name);

  constructor(
    private readonly config = {
      autoLog: true,
      includeStack: process.env.NODE_ENV !== 'production',
    },
  ) {}

  /**
   * Handles critical errors with application shutdown
   */
  async handleCriticalError(
    error: unknown,
    context: ErrorContext = {},
    app?: any,
  ): Promise<never> {
    const normalizedError = this.normalizeError(error);
    this.logError(normalizedError, { ...context, isCritical: true });

    // Graceful shutdown if app instance provided
    if (app && app.close) {
      await app.close();
    }
    process.exit(1);
  }

  /**
   * Main error handling method
   */
  handleError(
    error: unknown,
    context: ErrorContext = {},
    defaultMessage?: string,
  ): never {
    const normalizedError = this.normalizeError(error);

    if (this.config.autoLog) {
      this.logError(normalizedError, context);
    }

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      this.handlePrismaError(error, context);
    }

    if (error instanceof Prisma.PrismaClientValidationError) {
      throw new BadRequestException({
        message: 'Database validation failed',
        context: context.service || 'Application',
        details: normalizedError.message.replace(/\n/g, ' '),
        ...context,
      });
    }

    // Re-throw NestJS exceptions
    if (
      error instanceof ConflictException ||
      error instanceof NotFoundException ||
      error instanceof BadRequestException ||
      error instanceof ForbiddenException
    ) {
      throw error;
    }

    // Throw appropriate HTTP exception
    throw new InternalServerErrorException({
      message: defaultMessage || normalizedError.message,
      context: context.service || 'Application',
      stack: this.config.includeStack ? normalizedError.stack : undefined,
      ...context,
    });
  }

  /**
   * Handles Prisma errors specifically
   */
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

    switch (error.code) {
      case 'P2002':
        const field = (error.meta?.target as string[])?.[0];
        throw new ConflictException({
          message: field
            ? `${field} already exists`
            : 'Unique constraint violation',
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

  /**
   * Normalizes different error types
   */
  private normalizeError(error: unknown): {
    message: string;
    stack?: string;
    code?: string;
    details?: any;
    status?: number;
    name?: string;
  } {
    if (error instanceof Error) {
      return {
        message: error.message,
        stack: error.stack,
        code: (error as any).code || 'INTERNAL_ERROR',
        details: (error as any).details,
        status: (error as any).status || HttpStatus.INTERNAL_SERVER_ERROR,
        name: error.name,
      };
    }

    if (typeof error === 'string') {
      return {
        message: error,
        code: 'INTERNAL_ERROR',
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      };
    }

    return {
      message: 'An unknown error occurred',
      code: 'UNKNOWN_ERROR',
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      details: error,
    };
  }

  /**
   * Logs errors with appropriate level
   */
  private logError(
    error: ReturnType<typeof this.normalizeError>,
    context: ErrorContext,
  ): void {
    const logLevel = this.getLogLevel(
      error.status || HttpStatus.INTERNAL_SERVER_ERROR,
    );

    this.logger.logMessage({
      level: logLevel,
      message: error.message,
      error,
      context: {
        ...context,
        statusCode: error.status,
      },
      stack: this.config.includeStack ? error.stack : undefined,
    });
  }

  /**
   * Determines log level based on status code
   */
  private getLogLevel(status: number): 'error' | 'warning' | 'critical' {
    if (status >= 500) {
      return 'critical';
    }
    if (status >= 400) {
      return 'error';
    }
    return 'warning';
  }
}

