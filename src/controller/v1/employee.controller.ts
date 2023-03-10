import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { EmployeeService } from '@application/services/employee.service';
import { CreateEmployeeViewModel } from '@application/view-models/employee/CreateEmployee.view-models';
import { UpdateEmployeeViewModel } from '@application/view-models/employee/UpdateEmployee.view-models';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { Response } from '@controller/response.contoller';
import { BadRequest } from '@infrastructure/helpers/documentation/api/bad-request';
import { HttpRestApiResponseEmployee } from '@infrastructure/helpers/documentation/employee/HttpRestApiResponseEmployee';
import { HttpRestApiResponseNotFoundEmployee } from '@infrastructure/helpers/documentation/employee/HttpRestApiResponseNotFoundEmployee';
import { HttpRestApiResponseCreatedEmployee } from '@infrastructure/helpers/documentation/employee/HttpRestApiResponseCreatedEmployee';
import { HttpRestApiResponseUnprocessableEntity } from '@infrastructure/helpers/documentation/common/HttpRestApiResponseUnprocessableEntity';

@ApiTags('Employee')
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  @ApiOperation({
    summary: 'create an employee',
  })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'The employee id',
  })
  @ApiCreatedResponse({
    description: 'Employee created.',
    type: HttpRestApiResponseCreatedEmployee,
  })
  @ApiBadRequestResponse({
    description: 'The request object doesn`t match the expected one',
    type: BadRequest,
  })
  @ApiUnprocessableEntityResponse({
    description: 'Validation error while creating employee',
    type: HttpRestApiResponseUnprocessableEntity,
  })
  create(@Body() createEmployee: CreateEmployeeViewModel) {
    return this.employeeService.create(createEmployee);
  }

  @Get()
  async findAll() {
    return await this.employeeService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Find one employee by id',
  })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'The employee id',
  })
  @ApiOkResponse({
    description: 'Employee founded.',
    type: HttpRestApiResponseEmployee,
  })
  @ApiNotFoundResponse({
    description: 'Employee cannot be founded.',
    type: HttpRestApiResponseNotFoundEmployee,
  })
  async findOne(@Param('id') id: string) {
    const employee = await this.employeeService.findOne(id);

    if (!employee)
      throw new NotFoundException(`The employee {${id}} has not found.`);

    return Response.success(employee);
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
