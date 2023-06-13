import { Test, TestingModule } from '@nestjs/testing';
import { PrimesService } from './primes.service';

describe('PrimesService', () => {
  let service: PrimesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrimesService],
    }).compile();

    service = module.get<PrimesService>(PrimesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
