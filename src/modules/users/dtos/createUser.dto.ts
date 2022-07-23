import { Expose } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @Expose()
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(60)
  first_name: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(60)
  last_name: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(60)
  middle_name: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @MinLength(6)
  @MaxLength(60)
  email: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(25)
  phone_number: string;
}
