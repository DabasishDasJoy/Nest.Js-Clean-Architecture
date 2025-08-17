import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import { RedisService } from 'src/common/redis/redis.service';

@Injectable()
export class BloomFilterService {
    // private bitArray: Uint8Array;
    private size: number;
    private hashCount: number;
    private readonly redisKey = 'bloom:usernames';

    constructor(private readonly redisService: RedisService) {
        this.size = 10_000;
        this.hashCount = 3;
        // this.bitArray = new Uint8Array(size);
    }

    private hash(item: string, seed: number): number {
        const hash = crypto
            .createHash('sha256')
            .update(seed + item)
            .digest('hex');

        return parseInt(hash.substring(0, 8), 16) % this.size;
    }

    async add(item: string): Promise<void> {
        for (let i = 0; i < this.hashCount; i++) {
            const index = this.hash(item, i);
            await this.redisService.setbit(this.redisKey, index, 1);
            // this.bitArray[index] = 1;
        }
    }

    async has(item: string): Promise<boolean> {
        for (let i = 0; i < this.hashCount; i++) {
            const index = this.hash(item, i);
            const bit = await this.redisService.getbit(this.redisKey, index);
            if (bit === 0) {
                return false;
            }
        }

        return true;
    }
}
