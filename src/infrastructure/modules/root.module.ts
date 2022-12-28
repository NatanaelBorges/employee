import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EmployeeModule } from '@infrastructure/modules/app/employee.module';
import { EmployeeContextModule } from '@infrastructure/modules/context/employee.context.module';
import { setEnvironment } from '@infrastructure/helpers/environments/environments';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      cache: true,
      envFilePath: setEnvironment(),
    }),
    EmployeeContextModule,
    EmployeeModule,
  ],
})
export class RootModule {}
