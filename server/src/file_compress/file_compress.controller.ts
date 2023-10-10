import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';

@Controller('file')
export class FileCompressController {
  @Post()
  textData(@Body() body: any) {
    if (body.sizeAfterCompression) return body;
    else throw new UnauthorizedException();
  }
}
