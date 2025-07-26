import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import environmentConfig from './environment.config';

@Module({
    imports: [
        NestConfigModule.forRoot({
            isGlobal: true,
            load: [environmentConfig]
        })
    ]
})
export class ConfigModule {}
