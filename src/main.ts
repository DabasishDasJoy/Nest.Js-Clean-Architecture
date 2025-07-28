import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { IServerConfig, IDatabaseConfig } from './common/config/index';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule, { abortOnError: false });

  const configService = app.get(ConfigService);
  const serverConfig = configService.get<IServerConfig>('server');
  const dbConfig = configService.get<IDatabaseConfig>('database');

  if (!serverConfig || !dbConfig) {
    throw new Error('Configuration not found');
  }

  await app.listen(serverConfig.port, serverConfig.host);
  logger.log(
    `🚀 Application is running on: http://${serverConfig?.host}:${serverConfig?.port}/${serverConfig?.apiPrefix}`,
  );
}
bootstrap();
