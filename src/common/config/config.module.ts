import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import databaseConfig from './database.config';
import nestConfig from './nest.config';


@Module({
    imports: [
        NestConfigModule.forRoot({
            isGlobal: true,
            load: [nestConfig, databaseConfig]
        })
    ]
})

export class ConfigModule {}
