import { InputType, Field } from '@nestjs/graphql';
import {
  IsEmail,
  IsString,
  MinLength,
  MaxLength,
  IsOptional,
  IsStrongPassword,
  IsEnum,
} from 'class-validator';
import { Role } from 'src/@generated';

@InputType()
export class CreateUserInput {
  @Field(() => String, { nullable: false })
  @IsEmail()
  email!: string;

  @Field(() => String, { nullable: false })
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  username!: string;

  @Field(() => String, { nullable: false })
  @IsStrongPassword()
  password!: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  avatar?: string;

  @Field(() => Role, { nullable: true })
  @IsOptional()
  @IsEnum(Role)
  role?: `${Role}`;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  bio?: string;
}
