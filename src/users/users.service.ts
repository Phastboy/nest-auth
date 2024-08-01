import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schemas/user.schema';
import { CreateUserDTO } from './dto/create-user.dto';

/**
 * Users Service
 * Handles business logic related to user operations.
 */
@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  /**
   * Create a new user.
   * @param createUserDto - Data transfer object containing user data.
   * @returns The newly created user document.
   */
  async create(createUserDto: CreateUserDTO): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    const savedUser = await createdUser.save();
    return savedUser;
  }

  /**
   * Find a user by username.
   * @param username - The username of the user.
   * @returns The user document if found.
   * @throws NotFoundException if user is not found.
   */
  async findByUsername(username: string): Promise<User> {
    console.log('Searching for username:', username);
    const user = await this.userModel.findOne({ username }).exec();
    if (!user) {
      console.log('User not found');
      throw new NotFoundException('User not found');
    }
    console.log({
      success: true,
      message: `username ${user.username} is found`,
    });
    return user;
  }
}
