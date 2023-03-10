import { ApiProperty } from '@nestjs/swagger';
import { HttpRestApiResponseUnprocessableEntity } from '@infrastructure/helpers/documentation/common/HttpRestApiResponseUnprocessableEntity';
import { EmployeeViewModel } from '@application/view-models/employee/Employee.view-models';

export class HttpRestApiResponseCreatedEmployee extends HttpRestApiResponseUnprocessableEntity {
  @ApiProperty({ type: EmployeeViewModel })
  public data: EmployeeViewModel;
}
