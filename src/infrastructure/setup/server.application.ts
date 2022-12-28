import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { RootModule } from '@infrastructure/modules/root.module';

export class ServerApplication {
  private readonly host: string = 'localhost';

  private readonly port: number = 3000;

  public async run(): Promise<void> {
    const app: NestExpressApplication =
      await NestFactory.create<NestExpressApplication>(RootModule);

    await app.listen(this.port, this.host);
  }

  public static new(): ServerApplication {
    return new ServerApplication();
  }
}
