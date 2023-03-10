import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { HttpRestApiResponse } from '@infrastructure/helpers/documentation/common/HttpRestApiResponse';

export class HttpRestApiResponseUnprocessableEntity extends HttpRestApiResponse {
  @ApiProperty({
    description: 'Status UNPROCESSABLE ENTITY.',
    example: HttpStatus.UNPROCESSABLE_ENTITY,
  })
  statusCode: HttpStatus;
}
