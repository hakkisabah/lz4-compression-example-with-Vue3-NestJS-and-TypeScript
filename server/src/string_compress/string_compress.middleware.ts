import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { StringCompressService } from './string_compress.service';

@Injectable()
export class StringCompressMiddleware implements NestMiddleware {
  constructor(private readonly stringCompressService: StringCompressService) {}

  use(req: Request, res: Response, next: NextFunction) {
    if (req.body.dataSetString) {
      this.stringCompressService.stringCompression(req);
      next();
    } else {
      next(new UnauthorizedException('No data set string found'));
    }
  }
}
