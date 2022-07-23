import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/createUser.dto';
import { GetUserDto } from '../dtos/getUser.dto';
import { UsersService } from '../servises/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAll(): Promise<GetUserDto[]> {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body() user: CreateUserDto): Promise<GetUserDto> {
    return this.usersService.create(user);
  }
}
