import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger } from '@nestjs/common';
import { RootModule } from '@infrastructure/modules/root.module';
import { ApiServerConfig } from '@infrastructure/helpers/config/api.server.config';

export class ServerApplication {
  private readonly host: string = ApiServerConfig.HOST;

  private readonly port: number = Number(ApiServerConfig.PORT);

  public async run(): Promise<void> {
    try {
      const app: NestExpressApplication =
        await NestFactory.create<NestExpressApplication>(RootModule);

      this.log();
      await app.listen(this.port, this.host);
    } catch (error) {
      Logger.error(`❌  Error starting server, ${error}`, 'Bootstrap');
      process.exit();
    }
  }

  private log(): void {
    Logger.log(
      `Environment: ${process.env.NODE_ENV?.toUpperCase()}`,
      'Bootstrap',
    );

    Logger.log(
      `🚀  Server ready at http://${this.host}:${this.port}`,
      'Bootstrap',
    );
  }

  public static new(): ServerApplication {
    return new ServerApplication();
  }
}
