import { Controller, Body, Post, UnauthorizedException } from '@nestjs/common';
import { StringCompressService } from './string_compress.service';

@Controller('text')
export class StringCompressController {
  constructor(private readonly stringCompressService: StringCompressService) {}

  @Post()
  textData(@Body() body: any) {
    if (body.sizeAfterCompression) return body;
    else throw new UnauthorizedException();
  }
}
