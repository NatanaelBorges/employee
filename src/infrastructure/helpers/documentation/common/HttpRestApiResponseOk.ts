import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { HttpRestApiResponse } from '@infrastructure/helpers/documentation/common/HttpRestApiResponse';

export class HttpRestApiResponseOk extends HttpRestApiResponse {
  @ApiProperty({
    description: 'Status OK.',
    example: HttpStatus.OK,
  })
  statusCode: HttpStatus;
}
