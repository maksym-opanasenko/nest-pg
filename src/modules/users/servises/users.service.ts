import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from '../dtos/createUser.dto';
import { GetUserDto } from '../dtos/getUser.dto';
import { UsersEntity } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UsersEntity)
    private usersEntity: typeof UsersEntity,
  ) {}

  async findAll(): Promise<GetUserDto[]> {
    return this.usersEntity.findAll();
  }

  async create(userDto: CreateUserDto): Promise<GetUserDto> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.usersEntity.create(userDto, { returning: true });
  }
}
