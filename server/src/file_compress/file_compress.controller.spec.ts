import { Test, TestingModule } from '@nestjs/testing';
import { FileCompressController } from './file_compress.controller';
import { FileCompressService } from './file_compress.service';

describe('FileCompressController', () => {
  let controller: FileCompressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileCompressController],
      providers: [FileCompressService],
    }).compile();

    controller = module.get<FileCompressController>(FileCompressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
