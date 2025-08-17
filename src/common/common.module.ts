import { Module } from '@nestjs/common';
import { DatabaseModule, SwaggerModule } from './';
import { BloomFilterModule } from './bloom-filter/bloom-filter.module';

@Module({
    imports: [DatabaseModule, SwaggerModule, BloomFilterModule],
})
export class CommonModule {}
