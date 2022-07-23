import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../servises/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  findAll(): Promise<any[]> {
    return this.usersService.findAll();
  }
}
