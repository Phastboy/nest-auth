import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserWithoutPassword } from '../interfaces/user.types';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<UserWithoutPassword> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    return await this.prismaService.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
      omit: {
        password: true,
      },
    });
  }

  async findAll(): Promise<UserWithoutPassword[]> {
    return await this.prismaService.user.findMany({
      omit: {
        password: true,
      },
    });
  }

  async findOne(id: number): Promise<UserWithoutPassword> {
    return await this.prismaService.user.findUniqueOrThrow({
      where: { id },
    });
  }

  async findByEmail(email: string) {
    return await this.prismaService.user.findUnique({
      where: { email },
    });
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<UserWithoutPassword> {
    const user = await this.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException(
        `User with email ${email} does not exist`,
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Incorrect password');
    }

    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UserWithoutPassword> {
    return await this.prismaService.user.update({
      where: { id },
      data: updateUserDto,
      omit: {
        password: true,
      },
    });
  }

  async remove(id: number): Promise<UserWithoutPassword> {
    return await this.prismaService.user.delete({
      where: { id },
      omit: {
        password: true,
      },
    });
  }
}
