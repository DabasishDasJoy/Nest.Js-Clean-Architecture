import { Module } from '@nestjs/common';
import { DraftingModule } from './drafting/drafting.module';
import { CommentingModule } from './commenting/commenting.module';
import { PublishingModule } from './publishing/publishing.module';
import { BlogController } from './blog.controller';

@Module({
    imports: [DraftingModule, CommentingModule, PublishingModule],
    controllers: [BlogController],
})
export class BlogModule {}
