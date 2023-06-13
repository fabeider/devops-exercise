import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', function () {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/health (GET)', () =>
    request(app.getHttpServer())
      .get('/api/health')
      .expect(200)
      .expect('Content-Type', /json/));

  it('/prime (POST)', () =>
    request(app.getHttpServer())
      .post('/prime')
      .send({ number: 2 })
      .expect(201)
      .expect('Content-Type', /json/));
});
