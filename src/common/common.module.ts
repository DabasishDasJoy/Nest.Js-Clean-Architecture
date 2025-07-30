import { Module } from '@nestjs/common';
import { DatabaseModule, SwaggerModule, ConfigModule } from './';

@Module({
  imports: [DatabaseModule, SwaggerModule, ConfigModule],
})
export class CommonModule {}
