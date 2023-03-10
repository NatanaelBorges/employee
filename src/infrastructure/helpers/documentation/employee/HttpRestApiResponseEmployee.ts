import { ApiProperty } from '@nestjs/swagger';
import { HttpRestApiResponseOk } from '@infrastructure/helpers/documentation/common/HttpRestApiResponseOk';
import { EmployeeViewModel } from '@application/view-models/employee/Employee.view-models';

export class HttpRestApiResponseEmployee extends HttpRestApiResponseOk {
  @ApiProperty({ type: EmployeeViewModel })
  public data: EmployeeViewModel;
}
