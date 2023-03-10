import { ApiProperty } from '@nestjs/swagger';

export class HttpRestApiResponse {
  @ApiProperty({ type: 'string' })
  public message: string;

  @ApiProperty({
    description: 'timestamp in ms',
    type: 'number',
    example: new Date(),
  })
  public timestamp: Date;

  @ApiProperty({ type: 'object' })
  public data: unknown;
}
