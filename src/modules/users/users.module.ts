import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './controllers/users.controller';
import { UsersEntity } from './entities/user.entity';
import { UsersService } from './servises/users.service';

@Module({
  imports: [SequelizeModule.forFeature([UsersEntity])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService, SequelizeModule],
})
export class UsersModule {}
