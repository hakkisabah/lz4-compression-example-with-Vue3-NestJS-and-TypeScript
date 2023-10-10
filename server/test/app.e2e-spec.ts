import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      // providers: [CompressionMiddleware],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('to send /text endpoint for dataset string', () => {
    return request(app.getHttpServer())
      .post('/text')
      .send({
        dataSetString:
          'a'.repeat(81) + 'XXXXXX' + 'a'.repeat(65531) + 'XXXXXXaaaaaa',
      })
      .expect(201)
      .then((response) => {
        expect(response.body).toHaveProperty('sizeBeforeCompression');
        expect(response.body).toHaveProperty('sizeAfterCompression');
        expect(response.body.sizeAfterCompression).toBeLessThan(
          response.body.sizeBeforeCompression,
        );
      });
  });
});
