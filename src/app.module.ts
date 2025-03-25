import { HttpStatus, MiddlewareConsumer, Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { LoggerMiddleware } from './logger/logger.middleware';
import { SwaggerModuleConfig } from './swagger/swagger.module';
import {
  PrismaModule,
  providePrismaClientExceptionFilter,
} from 'nestjs-prisma';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SeedModule } from './seed/seed.module';
import { GraphqlModule } from './graphql/graphql.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SwaggerModuleConfig,
    PrismaModule.forRootAsync({
      isGlobal: true,
      useFactory: async (configService: ConfigService) => {
        return {
          prismaOptions: {
            log: ['info', 'query', 'warn', 'error'],
            datasources: {
              db: {
                url: await configService.get('DATABASE_URL'),
              },
            },
          },
        };
      },
      inject: [ConfigService],
    }),
    SeedModule,
    GraphqlModule,
    UsersModule,
    PostsModule,
  ],
  controllers: [],
  providers: [
    providePrismaClientExceptionFilter({
      P2000: HttpStatus.BAD_REQUEST,
      P2002: HttpStatus.CONFLICT,
      P2025: HttpStatus.NOT_FOUND,
    }),
  ],
})
export class AppModule {
  //configure(consumer: MiddlewareConsumer) {
  //  consumer.apply(LoggerMiddleware).forRoutes('*');
  //}
}
