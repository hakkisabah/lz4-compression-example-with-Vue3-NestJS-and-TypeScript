import { MiddlewareConsumer, Module } from '@nestjs/common';
import { StringCompressService } from './string_compress.service';
import { StringCompressController } from './string_compress.controller';
import { StringCompressMiddleware } from './string_compress.middleware';

@Module({
  controllers: [StringCompressController],
  providers: [StringCompressService],
})
export class StringCompressModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(StringCompressMiddleware).forRoutes('/text');
  }
}
