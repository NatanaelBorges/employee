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

  constructor(employee?: Partial<Employee>) {
    super();
    this.id = employee?.id;
    this.active = employee?.active;
    this.createAt = employee?.createAt;
    this.updateAt = employee?.updateAt;
    this.deleted = employee?.deleted;
    this.firstName = employee?.firstName;
    this.lastName = employee?.lastName;
    this.email = employee?.email;
  }
}
