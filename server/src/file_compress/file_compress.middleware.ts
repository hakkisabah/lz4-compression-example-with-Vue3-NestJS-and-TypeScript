import { NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

import * as multer from 'multer';
import { StringCompressService } from '../string_compress/string_compress.service';

export class FileCompressMiddleware implements NestMiddleware {
  constructor(
    private readonly stringCompressService: StringCompressService = new StringCompressService(),
    private readonly storage = multer.memoryStorage(),
    private readonly upload = multer({ storage: storage }),
  ) {}
  use(req: Request, res: Response, next: NextFunction) {
    const stringService = this.stringCompressService;
    const d = this.upload.single('dataSet');
    d(req, res, function (err: any) {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        console.log('MulterError', err);
        next(new UnauthorizedException(err));
      } else if (err) {
        // An unknown error occurred when uploading.
        console.log('err', err);
        next(new UnauthorizedException(err));
      }
      // Everything went fine.
      if (req.file && req.file.mimetype === 'text/csv') {
        stringService.fileCompression(req);
        next();
      } else {
        next(new UnauthorizedException('Unsupported file type'));
      }
    });
  }
}
