import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConsoleLogger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger({
      json: true,
      colors: true,
    }),
  });
  const port = process.env.PORT ?? 3000;
  await app.listen(port);
}
bootstrap();
