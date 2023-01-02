import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmployeeService } from '@application/services/employee.service';
import { CreateEmployeeViewModel } from '@application/view-models/employee/CreateEmployee.view-models';
import { UpdateEmployeeViewModel } from '@application/view-models/employee/UpdateEmployee.view-models';
import { Employee } from '@infrastructure/data/mappings/employee.map';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  create(@Body() createEmployee: CreateEmployeeViewModel) {
    return this.employeeService.create(createEmployee);
  }

  @Get()
  async findAll() {
    return await this.employeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeViewModel,
  ) {
    return this.employeeService.update(id, updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.remove(id);
  }
}
