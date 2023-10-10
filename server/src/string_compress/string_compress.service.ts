import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import * as LZ4 from 'lz4';

@Injectable()
export class StringCompressService {
  fileCompression(req: Request) {
    try {
      req.body.fileName = req.file.originalname;
      req.body.sizeBeforeCompression = req.file.size;
      const input = Buffer.from(req.file.buffer.toString());
      req.body.dataSet = LZ4.encode(input);
      req.body.sizeAfterCompression = req.body.dataSet.length;
    } catch (e) {
      throw new UnauthorizedException(e);
    }
  }

  stringCompression(req: Request) {
    try {
      req.body.sizeBeforeCompression = req.body.dataSetString.length;
      req.body.dataSetString = LZ4.encode(req.body.dataSetString);
      req.body.sizeAfterCompression = req.body.dataSetString.length;
    } catch (e) {
      throw new UnauthorizedException(e);
    }
  }
}
