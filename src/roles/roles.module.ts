import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesResolver } from './roles.resolver';
import { ErrorHandler } from 'src/error-handler/error.util';

@Module({
  providers: [RolesResolver, RolesService, ErrorHandler],
})
export class RolesModule {}
