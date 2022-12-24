import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '@infrastructure/data/mappings/employee.map';
import { Injectable } from '@nestjs/common';
import { CreateEmployeeViewModel } from '@application/view-models/employee/CreateEmployee.view-models';
import { UpdateEmployeeViewModel } from '@application/view-models/employee/UpdateEmployee.view-models';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  create(createEmployee: CreateEmployeeViewModel) {
    const newEmployee = this.employeeRepository.create(createEmployee);
    return this.employeeRepository.save(newEmployee);
  }

  findAll() {
    return this.employeeRepository.find();
  }

  findOne(id: string) {
    return this.employeeRepository.findOneBy({ id });
  }

  async update(id: string, updateEmployee: UpdateEmployeeViewModel) {
    const employee = await this.employeeRepository.findOneBy({ id });
    return this.employeeRepository.save({ ...employee, ...updateEmployee });
  }

  async remove(id: string) {
    const employee = await this.employeeRepository.find({
      where: {
        id: id,
      },
    });
    return this.employeeRepository.remove(employee);
  }
}
