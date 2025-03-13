import { LoggerService } from '@nestjs/common';
import * as winston from 'winston';
import 'winston-daily-rotate-file';

export class AppLogger implements LoggerService {
  private logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(), // Logs in JSON format
      ),
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.colorize(), // Colorized logs for readability
            winston.format.simple(), // Simplified log output for console
          ),
        }),
        new winston.transports.DailyRotateFile({
          dirname: 'logs', // Store logs in the 'logs' directory
          filename: 'app-%DATE%.log',
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxSize: '20m',
          maxFiles: '14d',
        }),
      ],
    });
  }

  log(message: string, meta: object = {}) {
    this.logger.info({ message, ...meta });
  }

  error(message: string, trace?: string, meta: object = {}) {
    this.logger.error({ message, trace, ...meta });
  }

  warn(message: string, meta: object = {}) {
    this.logger.warn({ message, ...meta });
  }
}
