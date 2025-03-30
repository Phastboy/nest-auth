import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as argon from 'argon2';
import { Role } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { CreateUserInput } from './dto/create-user.input';
import {
  DEFAULT_USER_INCLUDES,
  PrivilegedRole,
  UserResponse,
} from './users.types';
import { AppLogger } from 'src/app.logger';
import { ErrorHandler } from 'src/error-handler/error.util';
import { User } from '@prisma/client';
import { UpdateUserInput } from './dto/update-user.input';

/**
 * @class UsersService
 * @description Service for managing user-related operations.
 */
@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly handler: ErrorHandler,
  ) {}
  private readonly logger = AppLogger.getInstance(UsersService.name);

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
   * @private
   * @type {Role[]}
   * @description This list is derived from the Role enum, excluding privileged roles.
   */
  private readonly nonPrivilegedRoles: Role[] = Object.values(Role).filter(
    (r) => !this.privilegedRoles.includes(r as PrivilegedRole),
  );

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

  /**
   * Creates a new user while ensuring that privileged roles cannot be assigned.
   *
   * @param {CreateUserInput} createUserInput - The user data for registration.
   * @returns {Promise<UserResponse>} - The created user object.
   * @throws {BadRequestException} - If the role assigned is a privileged role.
   */
  async createUser(createUserInput: CreateUserInput): Promise<UserResponse> {
    try {
      /**
       * The role assigned to the new user.
       * Defaults to `STUDENT` if not provided.
       */
      const role: Role = createUserInput.role || Role.STUDENT;

      // Check if the assigned role is a privileged role
      if (this.privilegedRoles.includes(role as PrivilegedRole)) {
        throw new BadRequestException(
          `Registration of users with the role '${role}' is restricted.`,
          {
            description: `The role '${role}' is considered a privileged role and cannot be assigned during user registration. Allowed roles: ${this.nonPrivilegedRoles.join(', ')}.`,
          },
        );
      }

      // Hash password before storing
      const hashedPassword = await argon.hash(createUserInput.password);

      // Create user in the database
      const user = await this.prismaService.user.create({
        data: {
          ...createUserInput,
          password: hashedPassword,
        },
        omit: {
          password: true,
        },
        include: DEFAULT_USER_INCLUDES,
      });

      // Log success
      this.logger.info(`User created successfully`, {
        metadata: { id: user.id, email: user.email, username: user.username },
      });

      return user;
    } catch (error) {
      // Handle errors via centralized error handler
      return this.handler.handleError(error, {
        operation: 'createUser',
        service: 'UsersService',
        metadata: {
          email: createUserInput.email,
          username: createUserInput.username,
        },
      });
    }
  }

  /**
   * finds a user by their ID.
   * @param {number} id - The ID of the user to find.
   * @return {Promise<UserResponse>} - The found user object.
   * @throws {NotFoundException} - If the user is not found.
   */
  async findUserById(id: number): Promise<UserResponse> {
    try {
      const user = await this.prismaService.user.findUnique({
        where: { id },
        omit: {
          password: true,
        },
        include: DEFAULT_USER_INCLUDES,
      });

      if (!user) {
        throw new NotFoundException(`User with ID ${id} not found.`);
      }

      return user;
    } catch (error) {
      this.handler.handleError(error, {
        operation: 'findUserById',
        service: 'UsersService',
        metadata: { id },
      });
    }
  }

  /**
   * Finds a user by their email.
   * @param {string} email - The email of the user to find.
   * @return {Promise<User>} - The found user object.
   * @throws {NotFoundException} - If the user is not found.
   */
  async findUserByEmail(email: string): Promise<User> {
    try {
      const user = await this.prismaService.user.findUnique({
        where: { email },
      });

      if (!user) {
        throw new NotFoundException(`User with email ${email} not found.`);
      }

      return user;
    } catch (error) {
      return this.handler.handleError(error, {
        operation: 'findUserByEmail',
        service: 'UsersService',
        metadata: { email },
      });
    }
  }

  /**
   * Updates a user's details.
   * @param {number} id - The ID of the user to update.
   * @param {Partial<UpdateUserInput>} updateUserInput - The new user data.
   * @return {Promise<UserResponse>} - The updated user object.
   * @throws {NotFoundException} - If the user is not found or if the update fails.
   */
  async updateUser(
    id: number,
    updateUserInput: UpdateUserInput,
  ): Promise<UserResponse> {
    try {
      const user = await this.prismaService.user.update({
        where: { id },
        data: updateUserInput,
        omit: {
          password: true,
        },
        include: DEFAULT_USER_INCLUDES,
      });

      if (!user) {
        throw new NotFoundException(`User with ID ${id} not found.`);
      }

      return user;
    } catch (error) {
      return this.handler.handleError(error, {
        operation: 'updateUser',
        service: 'UsersService',
        metadata: { id, updateUserInput },
      });
    }
  }
}
