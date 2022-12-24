import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeViewModel } from '@application/view-models/employee/CreateEmployee.view-models';

export class UpdateEmployeeViewModel extends PartialType(
  CreateEmployeeViewModel,
) {}
