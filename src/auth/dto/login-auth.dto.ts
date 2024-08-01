import { IsNotEmpty, IsString } from 'class-validator';

/**
 * LoginAuthDTO
 * Data Transfer Object for user login.
 */
export class LoginAuthDTO {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
