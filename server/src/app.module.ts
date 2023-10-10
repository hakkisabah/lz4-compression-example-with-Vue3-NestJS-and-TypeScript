import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileCompressModule } from './file_compress/file_compress.module';
import { StringCompressModule } from './string_compress/string_compress.module';
import { StringCompressService } from './string_compress/string_compress.service';

@Module({
  imports: [FileCompressModule, StringCompressModule],
  controllers: [AppController],
  providers: [AppService, StringCompressService],
})
export class AppModule {}
