import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { HttpRestApiResponse } from '@infrastructure/helpers/documentation/common/HttpRestApiResponse';

export class HttpRestApiResponseCreated extends HttpRestApiResponse {
  @ApiProperty({
    description: 'Status Created.',
    example: HttpStatus.CREATED,
  })
  statusCode: HttpStatus;
}
