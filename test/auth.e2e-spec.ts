import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { CreateUserDTO } from '../src/users/dto/create-user.dto';
import { UsersService } from '../src/users/users.service';

describe('AuthController (e2e)', () => {
  let app: INestApplication;
  let usersService: UsersService;

  const randomSuffix = Math.floor(Math.random() * 10000);
  const mockUser: CreateUserDTO = {
    username: `testuser_${randomSuffix}`,
    email: `test_${randomSuffix}@example.com`,
    password: 'password',
    role: 'user',
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    usersService = moduleFixture.get<UsersService>(UsersService);
  });

  afterAll(async () => {
    await app.close();
  });

  it('/auth/register (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post('/auth/register')
      .send(mockUser)
      .expect(201);

    expect(response.body).toHaveProperty('_id');
    expect(response.body).toHaveProperty('username', mockUser.username);
  });
});
