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
import { handleError } from 'src/common/utils/error-handler.util';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * List of privileged roles with special access
   * @private
   */
  private readonly privilegedRoles: PrivilegedRole[] = [
    Role.SUPER_ADMIN,
    Role.FACULTY_DEAN,
    Role.REGISTRAR,
    Role.DEPARTMENT_HEAD,
  ];

  /**
   * Creates a new user in the system.
   * @param {CreateUserInput} createUserDto - The user data to be created.
   * @returns {Promise<UserResponse>} - The created user response object.
   * @throws {ForbiddenException} - If the user doesn't have sufficient privileges to assign the specified role.
   */
  async create(createUserDto: CreateUserInput): Promise<UserResponse> {
    try {
      const role: Role = createUserDto.role || Role.STUDENT;

      if (this.privilegedRoles.includes(role as PrivilegedRole)) {
        throw new ForbiddenException(
          `sorry you cannot register as the requested role: ${role}, please consider some other role`,
        );
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
      handleError(error, 'Failed to create user');
    }
  }

  /**
   * Fetches all users from the database.
   * @returns {Promise<UserResponse[]>} - A list of user response objects.
   * @throws {InternalServerErrorException} - If there's an error fetching the users.
   */
  async findAll(): Promise<UserResponse[]> {
    try {
      return await this.prisma.user.findMany({
        include: DEFAULT_USER_INCLUDES,
      });
    } catch (error) {
      handleError(error, 'Failed to fetch users');
    }
  }

  /**
   * Fetches a single user by their ID.
   * @param {number} id - The ID of the user to fetch.
   * @returns {Promise<UserResponse | null>} - The user object if found, otherwise null.
   * @throws {NotFoundException} - If the user with the given ID is not found.
   */
  async findOne(id: number): Promise<UserResponse> {
    try {
      const user = await this.prisma.user.findUniqueOrThrow({
        where: { id },
        include: DEFAULT_USER_INCLUDES,
      });

      if (!user) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }

      return user;
    } catch (error) {
      handleError(error, 'Failed to fetch user');
    }
  }

  /**
   * Finds a user by their email.
   * @param {string} email - The email address to search for.
   * @returns {Promise<User | null>} - The user if found, otherwise null.
   * @throws {InternalServerErrorException} - If there's an error fetching the user by email.
   */
  async findByEmail(email: string): Promise<User | null> {
    try {
      return await this.prisma.user.findUnique({
        where: { email },
      });
    } catch (error) {
      handleError(error, 'Failed to find user by email');
    }
  }

  /**
   * Updates an existing user's details, including their password if provided.
   * @param {number} id - The ID of the user to update.
   * @param {UpdateUserInput} updateUserDto - The data to update the user with.
   * @param {Role} [currentUserRole] - The role of the current user making the request. This is optional.
   * @returns {Promise<UserResponse>} - The updated user response object.
   * @throws {ForbiddenException} - If the user doesn't have sufficient privileges to assign the specified role.
   */
  async update(
    id: number,
    updateUserDto: UpdateUserInput,
    currentUserRole?: Role,
  ): Promise<UserResponse> {
    try {
      if (updateUserDto.role && currentUserRole) {
        if (!this.canAssignRole(currentUserRole, updateUserDto.role)) {
          throw new ForbiddenException(
            `Insufficient privileges to assign role: ${updateUserDto.role}`,
          );
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
      handleError(error, 'Failed to update user');
    }
  }

  /**
   * Deletes a user by their ID.
   * @param {number} id - The ID of the user to delete.
   * @returns {Promise<UserResponse>} - The deleted user response object.
   * @throws {InternalServerErrorException} - If there's an error deleting the user.
   */
  async remove(id: number): Promise<UserResponse> {
    try {
      return await this.prisma.user.delete({
        where: { id },
        include: DEFAULT_USER_INCLUDES,
      });
    } catch (error) {
      handleError(error, 'Failed to delete user');
    }
  }

  /**
   * Determines if a given role can be assigned to a target user based on the current user's role.
   * @param {Role} assignerRole - The role of the user attempting to assign the target role.
   * @param {Role} targetRole - The role to be assigned.
   * @returns {boolean} - Whether the assigner has the necessary privileges to assign the target role.
   */
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
