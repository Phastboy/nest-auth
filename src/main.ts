import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConsoleLogger, ValidationPipe } from '@nestjs/common';
import { AppLogger } from './app.logger';
import { ErrorHandler } from './common/utils/error.util';
import { PortFinder } from './port';

async function bootstrap() {
  const logger = AppLogger.getInstance('Bootstrap');

  try {
    const app = await NestFactory.create(AppModule, {
      logger: new ConsoleLogger({
        json: true,
        colors: true,
      }),
    });
    app.useGlobalPipes(new ValidationPipe());

    const portFinder = new PortFinder({
      defaultPort: parseInt(process.env.PORT || '3000', 10),
      maxPortAttempts: 0,
    });

    const port = await portFinder.findAvailablePort();
    logger.info(`Starting server on port ${port}`, {
      metadata: { port, environment: process.env.NODE_ENV },
    });

    await app.listen(port);
    logger.info(`Application is running on: ${await app.getUrl()}`);
  } catch (error) {
    const errorHandler = new ErrorHandler();
    errorHandler.handleCriticalError(error, {
      service: 'Bootstrap',
      stage: 'initialization',
    });
  }
}

// Start application
bootstrap().catch((error) => {
  // Fallback error handling if something goes wrong in the bootstrap itself
  const logger = AppLogger.getInstance('Bootstrap');
  logger.critical('Fatal error during bootstrap', { error });
  process.exit(1);
});

