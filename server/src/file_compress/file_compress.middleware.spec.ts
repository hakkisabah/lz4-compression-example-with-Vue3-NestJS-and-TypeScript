import { FileCompressMiddleware } from './file_compress.middleware';

describe('FileCompressMiddleware', () => {
  it('should be defined', () => {
    expect(new FileCompressMiddleware()).toBeDefined();
  });
});
