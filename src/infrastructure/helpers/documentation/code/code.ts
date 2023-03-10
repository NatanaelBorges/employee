import { HttpStatus } from '@nestjs/common';

export type CodeDescription = {
  code: number;
  message: string;
};

export class Code {
  public static SUCCESS: CodeDescription = {
    code: HttpStatus.OK,
    message: 'Success',
  };

  public static NOT_FOUND: CodeDescription = {
    code: HttpStatus.NOT_FOUND,
    message: 'Not Found',
  };

  public static INTERNAL_ERROR: CodeDescription = {
    code: HttpStatus.INTERNAL_SERVER_ERROR,
    message: 'Internal error',
  };
}
