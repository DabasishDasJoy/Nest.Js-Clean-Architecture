import { Test, TestingModule } from '@nestjs/testing';
import { EditingService } from './editing.service';

describe('EditingService', () => {
  let service: EditingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EditingService],
    }).compile();

    service = module.get<EditingService>(EditingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
