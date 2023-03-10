import { Employee } from '@infrastructure/data/mappings/employee.map';
import { ApiProperty } from '@nestjs/swagger';
import { plainToClass, Expose } from 'class-transformer';
import { v4 as uuid } from 'uuid';

export class EmployeeViewModel {
  @Expose()
  @ApiProperty({
    description: 'The id of the employee',
    example: uuid(),
  })
  id: number;

  @Expose()
  @ApiProperty({
    description: 'The first name of the employee',
    example: 'John',
  })
  firstName: string;

  @Expose()
  @ApiProperty({
    description: 'The last name of the employee',
    example: 'Doe',
  })
  lastName: string;

  @Expose()
  @ApiProperty({
    description: 'The unique email of the employee',
    example: 'john.doe@gmail.com',
  })
  email: string;

  @Expose()
  @ApiProperty({ description: 'The employee is active' })
  active: boolean;

  @Expose()
  @ApiProperty({ description: 'The crational date of the employee' })
  createAt: Date;

  @Expose()
  @ApiProperty({ description: 'The date of the last employee update' })
  updateAt: Date;

  static toViewModel(employee: Employee): EmployeeViewModel {
    return plainToClass(EmployeeViewModel, employee, {
      excludeExtraneousValues: true,
    });
  }
}
