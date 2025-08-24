import { Test, TestingModule } from '@nestjs/testing';
import { JwtServiceService } from './jwt-service.service';

describe('JwtServiceService', () => {
    let service: JwtServiceService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [JwtServiceService],
        }).compile();

        service = module.get<JwtServiceService>(JwtServiceService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
