import { Logger } from '@nestjs/common';
import {
  LogLevel,
  LogInfo,
  ErrorMetadata,
  StackTraceInfo,
} from './common/types/log.type';

export class AppLogger extends Logger {
  private static instances = new Map<string, AppLogger>();

  /**
   * Get or create a logger instance for a specific context
   */
  static getInstance(context: string = 'Application'): AppLogger {
    if (!this.instances.has(context)) {
      this.instances.set(context, new AppLogger(context));
    }
    return this.instances.get(context)!;
  }

  /**
   * Main logging method
   */
  logMessage(info: LogInfo): void {
    const { level, message, error, metadata, traceId } = info;
    const logMetadata = this.prepareMetadata(
      message,
      error instanceof Error ? error : undefined,
      metadata,
      traceId,
    );

    const formattedMessage = logMetadata
      ? `${message} ${JSON.stringify(logMetadata)}`
      : message;

    this.dispatchLog(level, formattedMessage);
  }

  /**
   * Prepare metadata for logging
   */
  private prepareMetadata(
    message: string,
    error?: Error,
    metadata?: Record<string, unknown>,
    traceId?: string,
  ): Record<string, unknown> | undefined {
    const baseMetadata: Record<string, unknown> = {
      ...metadata,
      ...(traceId && { traceId }),
    };

    if (error) {
      return {
        ...baseMetadata,
        error: this.extractErrorInfo(error, message),
      };
    }

    return Object.keys(baseMetadata).length > 0 ? baseMetadata : undefined;
  }

  /**
   * Extract error information
   */
  private extractErrorInfo(
    error: Error,
    message: string,
  ): ErrorMetadata['error'] {
    return {
      message,
      name: error.name,
      stack: this.extractStackInfo(error.stack),
      ...('code' in error && { code: (error as any).code }),
      ...('details' in error && { details: (error as any).details }),
      ...('cause' in error && { cause: (error as any).cause }),
    };
  }

  /**
   * Parse stack trace
   */
  private extractStackInfo(stack?: string): StackTraceInfo | undefined {
    if (!stack) return undefined;

    const stackLines = stack.split('\n');
    const errorMessage = stackLines[0].trim();

    for (let i = 1; i < stackLines.length; i++) {
      const match = stackLines[i].match(/\s+at\s+(.*?)\s\((.*):(\d+):(\d+)\)/);
      if (match) {
        const [, functionName, fileName, lineNumber, columnNumber] = match;
        return {
          errorMessage,
          functionName,
          fileName: fileName.replace(process.cwd(), ''),
          lineNumber,
          columnNumber,
        };
      }
    }
    return undefined;
  }

  /**
   * Dispatch to appropriate log level
   */
  private dispatchLog(level: LogLevel, message: string): void {
    switch (level) {
      case 'critical':
        this.error(message);
        process.exitCode = 1;
        break;
      case 'error':
        this.error(message);
        break;
      case 'warning':
        this.warn(message);
        break;
      case 'debug':
        this.debug(message);
        break;
      case 'verbose':
        this.verbose(message);
        break;
      case 'info':
      default:
        this.log(message);
    }
  }

  /**
   * Convenience methods for each log level
   */
  critical(message: string, meta?: Omit<LogInfo, 'level' | 'message'>) {
    this.logMessage({ level: 'critical', message, ...meta });
  }

  logError(message: string, meta?: Omit<LogInfo, 'level' | 'message'>) {
    this.logMessage({ level: 'error', message, ...meta });
  }

  warning(message: string, meta?: Omit<LogInfo, 'level' | 'message'>) {
    this.logMessage({ level: 'warning', message, ...meta });
  }

  logDebug(message: string, meta?: Omit<LogInfo, 'level' | 'message'>) {
    this.logMessage({ level: 'debug', message, ...meta });
  }

  logVerbose(message: string, meta?: Omit<LogInfo, 'level' | 'message'>) {
    this.logMessage({ level: 'verbose', message, ...meta });
  }

  info(message: string, meta?: Omit<LogInfo, 'level' | 'message'>) {
    this.logMessage({ level: 'info', message, ...meta });
  }
}

