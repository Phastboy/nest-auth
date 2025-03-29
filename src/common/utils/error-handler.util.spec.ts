import {
  handleError,
  handleCriticalError,
  handleWarning,
  handleValidationError,
} from './error-handler.util';
import {
  BadRequestException,
  ConflictException,
  InternalServerErrorException,
  NotFoundException,
  Logger,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';

describe('Error Handler Utils', () => {
  const context = 'TestContext';
  const metadata = { key: 'value' };

  beforeEach(() => {
    jest.spyOn(Logger.prototype, 'error').mockImplementation(() => {});
    jest.spyOn(Logger.prototype, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('handleError', () => {
    it('should handle PrismaClientKnownRequestError with code P2002', () => {
      const error = new Prisma.PrismaClientKnownRequestError(
        JSON.stringify({
          message: 'Unique constraint violation',
          code: 'P2002',
          clientVersion: '1.0.0',
        }),
        { code: 'P2002', clientVersion: '1.0.0' }
      );
      (error as any).meta = { target: ['email'] };

      expect(() => handleError(error, context, metadata)).toThrow(ConflictException);
    });

    it('should handle generic Error', () => {
      const error = new Error('Generic error');

      expect(() => handleError(error, context, metadata)).toThrow(InternalServerErrorException);
    });

    it('should handle unknown error types', () => {
      const error = 'Unknown error';

      expect(() => handleError(error, context, metadata)).toThrow(InternalServerErrorException);
    });
  });

  describe('handleCriticalError', () => {
    it('should log the error and exit the process', async () => {
      const error = new Error('Critical error');
      const exitSpy = jest.spyOn(process, 'exit').mockImplementation(() => {
        throw new Error('Mock process.exit called');
      });
  
      // Test the synchronous part (the error throw)
      expect(() => handleCriticalError(error, context, metadata)).toThrow('Critical error in TestContext');
      
      // Verify the logging
      expect(Logger.prototype.error).toHaveBeenCalledWith(
        expect.stringContaining('"context":"TestContext"')
      );
      expect(Logger.prototype.error).toHaveBeenCalledWith(
        expect.stringContaining('"metadata":{"key":"value"}')
      );
  
      // In test environment, exit shouldn't be called
      expect(exitSpy).not.toHaveBeenCalled();
  
      exitSpy.mockRestore();
    });
  });

  describe('handleWarning', () => {
    it('should log a warning', () => {
      const error = new Error('Warning error');

      handleWarning(error, context, metadata);

      expect(Logger.prototype.warn).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'Warning error',
          context,
          metadata,
        }),
      );
    });
  });

  describe('handleValidationError', () => {
    it('should throw BadRequestException for validation errors', () => {
      const errors = { field: ['Field is required'] };

      expect(() => handleValidationError(errors, context, metadata)).toThrow(BadRequestException);
    });
  });
});
