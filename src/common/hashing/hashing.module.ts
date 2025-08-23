import { Module } from '@nestjs/common';
import { CLASS_TOKENS } from '../tokens/repository.tokens';
import { HashingService } from './hashing.service';

@Module({
    providers: [
        {
            provide: CLASS_TOKENS.HASHING_SERVICE,
            useClass: HashingService,
        },
    ],
    exports: [CLASS_TOKENS.HASHING_SERVICE],
})
export class HashingModule {}
