import { Entity, Column } from 'typeorm';
import { BaseEntity } from '@infrastructure/data/mappings/core/entity';

@Entity({ name: 'Employee' })
export class Employee extends BaseEntity {
  @Column('varchar', { length: 10 })
  firstName: string;

  @Column('varchar', { length: 30 })
  lastName: string;

  @Column('varchar', { length: 200 })
  email: string;
}
