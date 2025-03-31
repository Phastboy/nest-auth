export type LogLevel =
  | 'critical'
  | 'error'
  | 'warning'
  | 'debug'
  | 'info'
  | 'verbose';

export interface StackTraceInfo {
  errorMessage: string;
  functionName: string;
  fileName: string;
  lineNumber: string;
  columnNumber: string;
}

export interface ErrorMetadata {
  error: {
    message: string;
    name?: string;
    stack?: StackTraceInfo;
    code?: string;
    details?: unknown;
    cause?: unknown;
  };
}

export interface LogInfo {
  level: LogLevel;
  message: string;
  context?: string | Record<string, any>;
  stack?: unknown;
  metadata?: Record<string, unknown>;
  traceId?: string;
  error?: unknown;
}
