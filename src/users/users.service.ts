import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schemas/user.schema';
import { CreateUserDTO } from './dto/create-user.dto';

/**
 * User Service
 * Handles business logic related to user data.
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
    return createdUser.save();
  }

  /**
   * Find a user by username.
   * @param username - The username of the user.
   * @returns The user document if found.
   */
  async findByUsername(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ username }).exec();
  }

  /**
   * Find a user by email.
   * @param email - The email of the user.
   * @returns The user document if found.
   */
  async findByEmail(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ email }).exec();
  }
}
