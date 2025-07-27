import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { INestConfig, IDatabaseConfig } from './common';
import { Logger } from '@nestjs/common';


async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule, { abortOnError: false });

  const configService = app.get(ConfigService);
  const nestConfig = configService.get<INestConfig>('environment', {infer: true});
  const dbConfig = configService.get<IDatabaseConfig>('database', {infer: true});

  if (!nestConfig || !dbConfig) {
    throw new Error('Environment configuration not found');
  }

  await app.listen(nestConfig.port, nestConfig.host);
  logger.log(`🚀 Application is running on: http://${nestConfig.host}:${nestConfig.port}/${nestConfig.apiPrefix}`);
  logger.log(`🌐 CORS enabled for origin: ${nestConfig.corsOrigin}`);
  logger.log(`🌐 CORS enabled for origin: ${dbConfig.PORT}`);
}
bootstrap();
