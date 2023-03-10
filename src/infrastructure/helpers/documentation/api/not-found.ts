import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class NotFound {
  @ApiProperty({
    description: 'Status not found.',
    example: HttpStatus.NOT_FOUND,
  })
  statusCode: HttpStatus;

  @ApiProperty({
    description: 'The message not found.',
    example: 'The entity {12} has not be found.',
  })
  message: string;

  @ApiProperty({
    description: 'The time of the executed',
    example: new Date(),
  })
  timestamp: Date;
}
