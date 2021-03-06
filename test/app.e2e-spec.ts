import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { response } from 'express';
import { ProductModule } from './../src/domain/product/product.module';
import { ReviewModule } from './../src/domain/review/review.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;


  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, ProductModule, ReviewModule]

    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });


  it('/products (GET)', () => {
    return request(app.getHttpServer())
      .get('/products')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(response => {
        expect(response.body.items.length).toBe(0)
      })
  });

  afterAll(() => { console.log("cleanup")})

});
