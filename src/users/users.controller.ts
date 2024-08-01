import { Controller, Get, Param, Patch, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/gaurds/jwt-auth/jwt-auth.guard';
import { Roles } from '../auth/decorators/roles/roles.decorator';
import { RolesGuard } from '../auth/gaurds/role/role.guard';

/**
 * Users Controller
 * Handles requests related to user operations.
 */
@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':username')
  @Roles('admin')
  async findOne(@Param('username') username: string) {
    return this.usersService.findByUsername(username);
  }
}
