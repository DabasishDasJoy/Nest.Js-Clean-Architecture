import { Module } from '@nestjs/common';
import { AppRedisModule } from '../redis/redis.module';
import { BloomFilterService } from './bloom-filter.service';

@Module({
    imports: [AppRedisModule],
    providers: [BloomFilterService],
    exports: [BloomFilterService],
})
export class BloomFilterModule {}
