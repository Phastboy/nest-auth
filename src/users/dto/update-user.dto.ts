import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDTO } from './create-user.dto';

/**
 * UpdateUserDTO
 * Data Transfer Object for updating a user.
 * Inherits from CreateUserDTO and makes all fields optional.
 */
export class UpdateUserDTO extends PartialType(CreateUserDTO) {}
