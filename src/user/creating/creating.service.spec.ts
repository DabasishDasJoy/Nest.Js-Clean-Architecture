import { Test, TestingModule } from '@nestjs/testing';
import { CreatingService } from './creating.service';

describe('CreatingService', () => {
    let service: CreatingService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CreatingService],
        }).compile();

        service = module.get<CreatingService>(CreatingService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
