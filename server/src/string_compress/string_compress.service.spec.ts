import { Test, TestingModule } from '@nestjs/testing';
import { StringCompressService } from './string_compress.service';

describe('StringCompressService', () => {
  let service: StringCompressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StringCompressService],
    }).compile();

    service = module.get<StringCompressService>(StringCompressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
