import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeController } from '@controller/v1/employee.controller';
import { Employee } from '@infrastructure/data/mappings/employee.map';
import { EmployeeService } from '@application/services/employee.service';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
