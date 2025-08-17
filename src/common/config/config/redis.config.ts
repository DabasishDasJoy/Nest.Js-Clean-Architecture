import { registerAs } from '@nestjs/config';
import { IRedisConfig } from '../interfaces/redis-config.interface';

export default registerAs(
    'redis',
    (): IRedisConfig => ({
        port: Number(process.env.REDIS_PORT),
        host: String(process.env.REDIS_HOST),
        password: String(process.env.REDIS_PASSWORD),
        db: String(process.env.REDIS_DB),
    }),
);
