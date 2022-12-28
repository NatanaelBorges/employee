// import { typeOrmAsyncConfig } from '@infrastructure/data/context/employee.context';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '@infrastructure/data/context/employee.context';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions)],
})
export class EmployeeContextModule {}
