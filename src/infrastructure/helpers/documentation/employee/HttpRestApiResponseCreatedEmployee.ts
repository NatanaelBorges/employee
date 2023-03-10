import { ApiProperty } from '@nestjs/swagger';
import { HttpRestApiResponseCreated } from '@infrastructure/helpers/documentation/common/HttpRestApiResponseCreated';
import { EmployeeViewModel } from '@application/view-models/employee/Employee.view-models';

export class HttpRestApiResponseCreatedEmployee extends HttpRestApiResponseCreated {
  @ApiProperty({ type: EmployeeViewModel })
  public data: EmployeeViewModel;
}
