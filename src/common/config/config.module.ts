import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import databaseConfig from './config/database.config';
import jwtConfig from './config/jwt.config';
import redisConfig from './config/redis.config';
import serverConfig from './config/server.config';
import { dbConfigValidationSchema, serverValidationSchema } from './index';
import { jwtConfigValidationSchema } from './validation/jwt-config.validation';
import { redisValidationSchema } from './validation/redis-config.validation';

const validationSchemas = [
    serverValidationSchema,
    dbConfigValidationSchema,
    redisValidationSchema,
    jwtConfigValidationSchema,
];
const validationSchema = validationSchemas.reduce((combined, schema) => combined.concat(schema), Joi.object({}));

@Module({
    imports: [
        NestConfigModule.forRoot({
            cache: true,
            load: [serverConfig, databaseConfig, redisConfig, jwtConfig],
            validationSchema: validationSchema,
            validationOptions: {
                allowUnknown: true,
                abortEarly: false,
            },
            isGlobal: true,
        }),
    ],
})
export class ConfigModule {}
