import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { AuthModule } from './auth.module';

describe('AuthController', () => {
  let authController: AuthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AuthModule],
      controllers: [AuthController],
      providers: [AuthService, JwtService],
    }).compile();

    authController = app.get<AuthController>(AuthController);
  });

  describe('root', () => {
    it('Login', () => {
      expect(authController).toBeDefined();
    });
  });
});
