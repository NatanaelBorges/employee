import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { HttpRestApiResponse } from '@infrastructure/helpers/documentation/common/HttpRestApiResponse';

export class HttpRestApiResponseNotFound extends HttpRestApiResponse {
  @ApiProperty({
    description: 'Status OK.',
    example: HttpStatus.NOT_FOUND,
  })
  statusCode: HttpStatus;

  @ApiProperty({ type: 'string' })
  public message: string;
}
