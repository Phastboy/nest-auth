import { Controller, Post, Get, Param, UseGuards, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/gaurds/jwt-auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/gaurds/role/role.guard';
import { Roles } from 'src/auth/decorators/roles/roles.decorator';

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
