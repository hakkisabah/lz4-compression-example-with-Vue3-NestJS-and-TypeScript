import { MiddlewareConsumer, Module } from '@nestjs/common';
import { FileCompressController } from './file_compress.controller';
import { FileCompressMiddleware } from './file_compress.middleware';
import { StringCompressService } from '../string_compress/string_compress.service';

@Module({
  controllers: [FileCompressController],
  providers: [StringCompressService],
})
export class FileCompressModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FileCompressMiddleware).forRoutes('/file');
  }
}
