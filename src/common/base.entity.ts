import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'Base',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class BaseEntity extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column
  created_by: string;

  @Column
  created_at: Date;

  @Column
  updated_by: string;

  @Column
  updated_at: Date;
}
