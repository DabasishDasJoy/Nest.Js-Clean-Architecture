import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { serverValidationSchema, dbConfigValidationSchema } from './index';
import serverConfig from './config/server.config';
import databaseConfig from './config/database.config';

export const combinedValidationSchema = serverValidationSchema.concat(dbConfigValidationSchema);

@Module({
  imports: [
    NestConfigModule.forRoot({
      cache: true,
      load: [serverConfig, databaseConfig],
      validationSchema: combinedValidationSchema,
      validationOptions: {
        allowUnknown: true,
        abortEarly: false,
      },
    }),
  ],
})
export class ConfigModule {}
