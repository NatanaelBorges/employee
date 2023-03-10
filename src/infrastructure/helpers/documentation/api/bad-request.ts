import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class BadRequest {
  @ApiProperty({
    description: 'Status bad request',
    example: HttpStatus.BAD_REQUEST,
  })
  statusCode: HttpStatus;

  @ApiProperty({
    description: 'The error message.',
    example: 'Unexpected token in JSON at position 24',
  })
  message: [string];

  @ApiProperty({
    description: 'The time of the executed error.',
    example: new Date(),
  })
  timestamp: Date;

  @ApiProperty({
    description: 'The error message.',
    example: 'Bad Request',
  })
  error: string;
}
