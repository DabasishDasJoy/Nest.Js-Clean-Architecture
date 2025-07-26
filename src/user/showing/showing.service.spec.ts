import { Test, TestingModule } from '@nestjs/testing';
import { ShowingService } from './showing.service';

describe('ShowingService', () => {
  let service: ShowingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShowingService],
    }).compile();

    service = module.get<ShowingService>(ShowingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
