import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { IServerConfig, IDatabaseConfig } from './common/config/index';
import { Logger, VersioningType } from '@nestjs/common';

async function bootstrap() {
    const logger = new Logger('Bootstrap');
    const app = await NestFactory.create(AppModule, { abortOnError: false });

    const configService = app.get(ConfigService);
    const serverConfig = configService.get<IServerConfig>('server');
    const dbConfig = configService.get<IDatabaseConfig>('database');

    if (!serverConfig || !dbConfig) {
        throw new Error('Configuration not found');
    }

    app.setGlobalPrefix(serverConfig.apiPrefix);
    app.enableCors({
        origin: serverConfig.corsOrigin,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    });

    app.enableVersioning({
        type: VersioningType.URI,
        defaultVersion: '1',
    })

    await app.listen(serverConfig.port, serverConfig.host);
    logger.log(
        `🚀 Application is running on: http://${serverConfig?.host}:${serverConfig?.port}/${serverConfig?.apiPrefix}`,
    );
}
bootstrap();
