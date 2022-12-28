import { Module } from '@nestjs/common';
import { EmployeeModule } from '@infrastructure/modules/app/employee.module';
import { EmployeeContextModule } from '@infrastructure/modules/context/employee.context.module';

@Module({
  imports: [EmployeeContextModule, EmployeeModule],
})
export class RootModule {}
