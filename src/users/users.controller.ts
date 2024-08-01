import { Controller, Get, Param, Patch, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/gaurds/jwt-auth/jwt-auth.guard';
import { Roles } from 'src/auth/decorators/roles/roles.decorator';
import { UpdateUserRoleDTO } from './dto/update-role.dto';
import { RolesGuard } from 'src/auth/gaurds/role/role.guard';

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

  @Patch(':username/role')
  @Roles('admin')
  async updateRole(
    @Param('username') username: string,
    @Body() updateUserRoleDto: UpdateUserRoleDTO,
  ) {
    return this.usersService.updateUserRole(username, updateUserRoleDto.role);
  }
}
