import { ApiProperty } from '@nestjs/swagger';
import { HttpRestApiResponseNotFound } from '@infrastructure/helpers/documentation/common/HttpRestApiResponseNotFound';

export class HttpRestApiResponseNotFoundEmployee extends HttpRestApiResponseNotFound {
  @ApiProperty({
    type: 'string',
    example: 'The employee id has not found.',
  })
  message: string;

  @ApiProperty({
    type: 'string',
    example: 'Not Found',
  })
  error: string;
}
