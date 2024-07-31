import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from '../schemas/user.schema';

/**
 * User Controller
 * Handles HTTP requests related to user operations.
 */
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * Create a new user.
   * @param createUserDto - Data transfer object containing user data.
   * @returns The newly created user document.
   */
  @Post()
  async create(@Body() createUserDto: CreateUserDTO): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  /**
   * Find a user by username.
   * @param username - The username of the user.
   * @returns The user document if found.
   */
  @Get(':username')
  async findByUsername(@Param('username') username: string): Promise<User> {
    return this.usersService.findByUsername(username);
  }
}
