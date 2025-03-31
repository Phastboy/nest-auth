import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { ErrorHandler } from 'src/error-handler/error.util';

@Module({
  providers: [UsersResolver, UsersService, ErrorHandler],
})
export class UsersModule {}
