import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    example: 'This is my first post!',
    description: 'Content of the post',
  })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({
    example: true,
    description: 'Publish status of the post',
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  published?: boolean;
}
