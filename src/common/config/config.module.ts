import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import databaseConfig from './config/database.config';
import redisConfig from './config/redis.config';
import serverConfig from './config/server.config';
import { dbConfigValidationSchema, serverValidationSchema } from './index';
import { redisValidationSchema } from './validation/redis-config.valiation';

export const combinedValidationSchema = serverValidationSchema.concat(dbConfigValidationSchema);
export const validationSchema = combinedValidationSchema.concat(redisValidationSchema);

@Module({
    imports: [
        NestConfigModule.forRoot({
            cache: true,
            load: [serverConfig, databaseConfig, redisConfig],
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
