import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UsersEntity } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UsersEntity)
    private usersEntity: typeof UsersEntity,
  ) {}

  async findAll(): Promise<any[]> {
    return this.usersEntity.findAll();
  }
}
