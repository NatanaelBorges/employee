import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { initializeTransactionalContext } from 'typeorm-transactional-cls-hooked';
import { dataSourceOptions } from '@infrastructure/data/context/employee.context';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: dataSourceOptions,
      inject: [dataSourceOptions],
    }),
  ],
})
export class EmployeeContextModule implements OnApplicationBootstrap {
  onApplicationBootstrap(): void {
    initializeTransactionalContext();
  }
}
