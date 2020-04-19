import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { UsersModule } from '../src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';


describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
          AppModule,
          TypeOrmModule.forRoot(),
          UsersModule
        ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/users/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/users/15')
      .expect(200);
  });
});
