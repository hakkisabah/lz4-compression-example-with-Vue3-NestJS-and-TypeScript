import { Test, TestingModule } from '@nestjs/testing';
import { StringCompressController } from './string_compress.controller';
import { StringCompressService } from './string_compress.service';

describe('StringCompressController', () => {
  let controller: StringCompressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StringCompressController],
      providers: [StringCompressService],
    }).compile();

    controller = module.get<StringCompressController>(StringCompressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
