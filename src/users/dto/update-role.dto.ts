import { IsNotEmpty, IsString } from 'class-validator';

/**
 * UpdateUserRoleDTO
 * Data transfer object for updating a user's role.
 */
export class UpdateUserRoleDTO {
  @IsNotEmpty()
  @IsString()
  role: string;
}
