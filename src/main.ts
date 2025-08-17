import { ClassSerializerInterceptor, Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { IDatabaseConfig, IServerConfig } from './common/config/index';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

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
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            validationError: { target: false, value: false },
        }),
    );
    app.useGlobalFilters(new HttpExceptionFilter());
    app.useGlobalInterceptors(
        new ClassSerializerInterceptor(app.get(Reflector), {
            excludeExtraneousValues: true,
            enableImplicitConversion: true,
        }),
    );

    app.enableVersioning({
        type: VersioningType.URI,
        defaultVersion: '1',
    });

    await app.listen(serverConfig.port, serverConfig.host);
    logger.log(
        `🚀 Application is running on: http://${serverConfig?.host}:${serverConfig?.port}/${serverConfig?.apiPrefix}`,
    );
}
bootstrap();
