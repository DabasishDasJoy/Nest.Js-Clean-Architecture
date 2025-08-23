import { Module } from '@nestjs/common';
import { DatabaseModule, SwaggerModule } from './';
import { BloomFilterModule } from './bloom-filter/bloom-filter.module';
import { HashingModule } from './hashing/hashing.module';

@Module({
    imports: [DatabaseModule, SwaggerModule, BloomFilterModule, HashingModule],
})
export class CommonModule {}
