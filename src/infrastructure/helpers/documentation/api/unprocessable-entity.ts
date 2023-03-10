import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class UnprocessableEntity {
  @ApiProperty({
    description: 'The error status.',
    example: HttpStatus.UNPROCESSABLE_ENTITY,
  })
  statusCode: HttpStatus;

  @ApiProperty({
    description: 'The time of the executed error.',
    example: new Date(),
  })
  timestamp: Date;

  @ApiProperty({
    description: 'The REST path called.',
    example: '/users',
  })
  path: string;
}
