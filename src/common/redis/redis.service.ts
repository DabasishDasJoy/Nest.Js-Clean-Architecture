import { Injectable, Logger, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleDestroy {
    private readonly logger = new Logger(RedisService.name);
    private readonly redis: Redis;

    constructor(private configService: ConfigService) {
        this.redis = new Redis({
            port: this.configService.get<number>('redis.port'),
            host: this.configService.get<string>('redis.host'),
            password: this.configService.get<string>('redis.password'),
            db: this.configService.get<number>('redis.db'),
        });

        this.redis.on('connect', () => {
            this.logger.log('✅ Redis connected successfully');
        });

        this.redis.on('error', (error) => {
            this.logger.error('❌ Redis connection error:', error);
        });
    }

    async set(key: string, value: string | number, ttl?: number): Promise<void> {
        if (ttl) {
            await this.redis.setex(key, ttl, value);
        } else {
            await this.redis.set(key, value);
        }
    }

    async get(key: string): Promise<string | null> {
        return await this.redis.get(key);
    }

    async del(key: string): Promise<void> {
        await this.redis.del(key);
    }

    async exists(key: string): Promise<boolean> {
        return (await this.redis.exists(key)) === 1;
    }

    async setbit(key: string, value: number, offset: number): Promise<void> {
        await this.redis.setbit(key, value, offset);
    }

    async getbit(key: string, offset: number): Promise<number> {
        return await this.redis.getbit(key, offset);
    }

    async setHash(key: string, field: string, value: string): Promise<void> {
        await this.redis.hset(key, field, value);
    }

    async getHash(key: string, field: string): Promise<string | null> {
        return await this.redis.hget(key, field);
    }

    onModuleDestroy() {
        this.redis.disconnect();
    }
}
