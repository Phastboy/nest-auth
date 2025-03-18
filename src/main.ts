import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConsoleLogger } from '@nestjs/common';
import { SwaggerModuleConfig } from './swagger/swagger.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger({
      json: true,
      colors: true,
    }),
  });

  SwaggerModuleConfig.setup(app);

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
}
bootstrap();
