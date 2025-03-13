import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConsoleLogger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger({
      json: true,
      colors: true,
    }),
  });
  const config = new DocumentBuilder()
    .setTitle('authentication')
    .setVersion('1.0.0')
    .build();
  const document = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document, {
    swaggerOptions: {
      requestInterceptor: (req: any) => {
        req.credentials = 'include';
        return req;
      },
    },
  });
  const port = process.env.PORT ?? 3000;
  await app.listen(port);
}
bootstrap();
