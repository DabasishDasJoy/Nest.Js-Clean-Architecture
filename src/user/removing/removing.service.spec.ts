import { Test, TestingModule } from '@nestjs/testing';
import { RemovingService } from './removing.service';

describe('RemovingService', () => {
    let service: RemovingService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [RemovingService],
        }).compile();

        service = module.get<RemovingService>(RemovingService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
