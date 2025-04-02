import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesResolver } from './roles.resolver';
import { ErrorHandler } from 'src/error-handler/error.util';
import { UsersService } from 'src/users/users.service';

@Module({
  providers: [RolesResolver, RolesService, ErrorHandler, UsersService],
})
export class RolesModule {}
