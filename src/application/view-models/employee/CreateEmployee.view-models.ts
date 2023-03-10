import { IsEmail, IsNotEmpty } from 'class-validator';
export class CreateEmployeeViewModel {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  email: string;
}
