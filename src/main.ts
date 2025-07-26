import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { IEnvironmentConfig } from './common';
import { Logger } from '@nestjs/common';


async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule, { abortOnError: false });

  const configService = app.get(ConfigService);
  const environment = configService.get<IEnvironmentConfig>('environment');
  if (!environment) {
    throw new Error('Environment configuration not found');
  }

  await app.listen(environment.port, environment.host);
  logger.log(`🚀 Application is running on: http://${environment.host}:${environment.port}/${environment.apiPrefix}`);
  logger.log(`🌐 CORS enabled for origin: ${environment.corsOrigin}`);
}
bootstrap();
