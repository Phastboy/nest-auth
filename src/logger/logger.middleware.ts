import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AppLogger } from '../logger/logger';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new AppLogger();

  use(req: Request, res: Response, next: NextFunction) {
    const start = Date.now();

    // Safe stringification to prevent circular JSON errors
    const safeStringify = (obj: any) => {
      try {
        return JSON.stringify(obj);
      } catch {
        return '[Circular]';
      }
    };

    // Log request details
    this.logger.log('Incoming request', {
      method: req.method,
      url: req.originalUrl,
      ip: req.ip,
      headers: req.headers,
      query: req.query,
      body: safeStringify(req.body),
    });

    // Log response when finished
    res.on('finish', () => {
      const duration = Date.now() - start;
      const logData = {
        method: req.method,
        url: req.originalUrl,
        statusCode: res.statusCode,
        duration: `${duration}ms`,
      };

      if (res.statusCode >= 500) {
        this.logger.error('Response sent', undefined, logData);
      } else if (res.statusCode >= 400) {
        this.logger.warn('Response sent', logData);
      } else {
        this.logger.log('Response sent', logData);
      }
    });

    next();
  }
}
