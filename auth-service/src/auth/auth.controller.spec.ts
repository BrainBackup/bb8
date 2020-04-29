import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticationController } from './auth.controller';
import { AuthenticationService } from './auth.service';

describe('AuthenticationController', () => {
  let authenticationController: AuthenticationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AuthenticationController],
      providers: [AuthenticationService],
    }).compile();

    authenticationController = app.get<AuthenticationController>(AuthenticationController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(authenticationController.getHello()).toBe('ynahmany test');
    });
  });
});
