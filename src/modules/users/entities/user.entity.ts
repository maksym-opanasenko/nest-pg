import { Column, Table } from 'sequelize-typescript';
import { BaseEntity } from '../../../common/base.entity';

@Table({
  tableName: 'users',
  paranoid: true,
  deletedAt: 'deleted_at',
})
export class UsersEntity extends BaseEntity {
  @Column
  first_name: string;

  @Column
  middle_name: string;

  @Column
  last_name: string;

  @Column
  email: string;

  @Column
  phone_number: string;
}
