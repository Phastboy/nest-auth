import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import {
  DEFAULT_USER_INCLUDES,
  PrivilegedRole,
  UserResponse,
} from './users.types';
import * as argon from 'argon2';
import { Role } from '@prisma/client';
import { User } from 'src/@generated';
import { handleError, handleWarning } from 'src/common/utils/error-handler.util';
import { th } from '@faker-js/faker/.';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly privilegedRoles: PrivilegedRole[] = [
    Role.SUPER_ADMIN,
    Role.FACULTY_DEAN,
    Role.REGISTRAR,
    Role.DEPARTMENT_HEAD,
  ];

  async create(createUserDto: CreateUserInput): Promise<UserResponse> {
    try {
      const role: Role = createUserDto.role || Role.STUDENT;

      if (this.privilegedRoles.includes(role as PrivilegedRole)) {
        throw new ForbiddenException({
          message: `Insufficient privileges to create user with role: ${role}`,
          code: 'PRIVILEGED_ROLE_ATTEMPT',
          attemptedRole: role,
          allowedRoles: Object.values(Role).filter(r => !this.privilegedRoles.includes(r as PrivilegedRole))
        });
      }

      const hashedPassword = await argon.hash(createUserDto.password);

      return await this.prisma.user.create({
        data: {
          ...createUserDto,
          role,
          password: hashedPassword,
        },
        include: DEFAULT_USER_INCLUDES,
      });
    } catch (error) {
      handleError(error, 'UsersService.create', {
        input: { ...createUserDto, password: undefined }
      });
    }
  }

  async findAll(): Promise<UserResponse[]> {
    try {
      return await this.prisma.user.findMany({
        include: DEFAULT_USER_INCLUDES,
      });
    } catch (error) {
      handleError(error, 'UsersService.findAll');
    }
  }

  async findOne(id: number): Promise<UserResponse> {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id },
        include: DEFAULT_USER_INCLUDES,
      });

      if (!user) {
        throw new NotFoundException({
          message: `User with ID ${id} not found`,
          code: 'USER_NOT_FOUND',
          userId: id
        });
      }

      return user;
    } catch (error) {
      handleError(error, 'UsersService.findOne', { userId: id });
    }
  }

  async findByEmail(email: string): Promise<User> {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        handleWarning(`User with email ${email} not found`, 'UsersService.findByEmail');
        throw new NotFoundException({
          message: `User with email ${email} not found`,
          code: 'USER_NOT_FOUND',
          email,
        });
      }

      return user;
    } catch (error) {
      handleError(error, 'UsersService.findByEmail', { email });
    }
  }

  async update(
    id: number,
    updateUserDto: UpdateUserInput,
    currentUserRole?: Role,
  ): Promise<UserResponse> {
    try {
      if (updateUserDto.role && currentUserRole) {
        if (!this.canAssignRole(currentUserRole, updateUserDto.role)) {
          throw new ForbiddenException({
            message: `Insufficient privileges to assign role: ${updateUserDto.role}`,
            code: 'ROLE_ASSIGNMENT_FORBIDDEN',
            currentUserRole,
            attemptedRole: updateUserDto.role
          });
        }
      }

      const data: any = { ...updateUserDto };

      if (updateUserDto.password) {
        data.password = await argon.hash(updateUserDto.password);
      }

      return await this.prisma.user.update({
        where: { id },
        data,
        include: DEFAULT_USER_INCLUDES,
      });
    } catch (error) {
      handleError(error, 'UsersService.update', {
        userId: id,
        input: { ...updateUserDto, password: undefined }
      });
    }
  }

  async remove(id: number): Promise<UserResponse> {
    try {
      const user = await this.prisma.user.findUnique({ where: { id } });
      
      if (!user) {
        throw new NotFoundException({
          message: `User with ID ${id} not found`,
          code: 'USER_NOT_FOUND',
          userId: id
        });
      }

      if (this.privilegedRoles.includes(user.role as PrivilegedRole)) {
        throw new ForbiddenException({
          message: `Cannot delete user with privileged role: ${user.role}`,
          code: 'PRIVILEGED_USER_DELETION_ATTEMPT',
          userId: id,
          userRole: user.role
        });
      }

      return await this.prisma.user.delete({
        where: { id },
        include: DEFAULT_USER_INCLUDES,
      });
    } catch (error) {
      handleError(error, 'UsersService.remove', { userId: id });
    }
  }

  private canAssignRole(assignerRole: Role, targetRole: Role): boolean {
    const roleHierarchy: Record<Role, Role[]> = {
      [Role.SUPER_ADMIN]: Object.values(Role),
      [Role.FACULTY_DEAN]: [Role.LECTURER, Role.DEPARTMENT_HEAD, Role.STUDENT],
      [Role.DEPARTMENT_HEAD]: [Role.LECTURER, Role.STUDENT],
      [Role.REGISTRAR]: [Role.ADMIN, Role.STUDENT],
      [Role.ADMIN]: [],
      [Role.IT_STAFF]: [],
      [Role.LIBRARIAN]: [],
      [Role.FINANCE_STAFF]: [],
      [Role.LECTURER]: [],
      [Role.STUDENT]: [],
    };

    return (
      assignerRole === targetRole ||
      roleHierarchy[assignerRole]?.includes(targetRole) ||
      false
    );
  }
}