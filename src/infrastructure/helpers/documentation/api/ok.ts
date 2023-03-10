import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class Ok<TData> {
  @ApiProperty({
    description: 'Status OK.',
    example: HttpStatus.OK,
  })
  statusCode: HttpStatus;

  @ApiProperty({
    description: 'The message success.',
    example: 'Success',
  })
  message: string;

  @ApiProperty({
    description: 'Data',
  })
  data: TData;

  @ApiProperty({
    description: 'The time of the executed.',
    example: new Date(),
  })
  timestamp: Date;
}
