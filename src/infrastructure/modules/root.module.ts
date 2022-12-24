import { Module } from '@nestjs/common';
import { EmployeeModule } from '@infrastructure/modules/app/employee.module';

@Module({
  imports: [EmployeeModule],
})
export class RootModule {}
