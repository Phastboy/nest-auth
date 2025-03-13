import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AppLogger } from './logger';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new AppLogger();

  use(req: Request, res: Response, next: NextFunction) {
    const start = Date.now();

    const safeStringify = (obj: any) => {
      try {
        return JSON.stringify(obj);
      } catch {
        return '[Circular]';
      }
    };

    this.logger.log(
      `Incoming Request - Method: ${req.method}, URL: ${req.originalUrl}, IP: ${req.ip}, Headers: ${safeStringify(req.headers)}, Body: ${safeStringify(req.body)}, Query Params: ${safeStringify(req.query)}`,
    );

    res.on('finish', () => {
      const duration = Date.now() - start;
      const message = `[Response] ${req.method} ${req.originalUrl} - ${res.statusCode} - ${duration}ms`;

      if (res.statusCode >= 500) {
        this.logger.error(message);
      } else if (res.statusCode >= 400) {
        this.logger.warn(message);
      } else {
        this.logger.log(message);
      }
    });

    next();
  }
}
