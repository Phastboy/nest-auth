import { Module } from '@nestjs/common';
import { ErrorHandler } from './error.util';

@Module({
  providers: [ErrorHandler],
  exports: [ErrorHandler],
})
export class ErrorHandlerModule {}
