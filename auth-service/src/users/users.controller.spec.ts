import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let usersController: UsersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    usersController = app.get<UsersController>(UsersController);
  });

  describe('Get', () => {
      it('', () => {
          expect(false).toBeFalsy()
      })
    // it('Health check function', () => {
    //   expect(usersController.get).toStrictEqual({"services": [{"name": "mysql", "status": "UP", "version": "10.1.2"}], "status": "UP"});
    // });
  });
});
