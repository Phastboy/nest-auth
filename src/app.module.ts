import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './logger/logger.middleware';
import { PostsModule } from './posts/posts.module';
import { SwaggerModuleConfig } from './swagger/swagger.module';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    PrismaModule,
    PostsModule,
    SwaggerModuleConfig,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
