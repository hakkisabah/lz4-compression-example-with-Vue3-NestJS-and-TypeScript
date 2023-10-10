import { StringCompressMiddleware } from './string_compress.middleware';

describe('StringCompressMiddleware', () => {
  it('should be defined', () => {
    expect(new StringCompressMiddleware()).toBeDefined();
  });
});
