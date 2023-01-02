import { NestExpressApplication } from '@nestjs/platform-express';
import { TestingModule } from '@nestjs/testing';

export class TestServer {
  constructor(
    public readonly serverApplication: NestExpressApplication,
    public readonly testingModule: TestingModule,
  ) {}
}
