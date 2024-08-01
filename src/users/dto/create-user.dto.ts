import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

/**
 * Create User DTO
 * Defines the structure of the data required to create a new user.
 */
export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly role: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
