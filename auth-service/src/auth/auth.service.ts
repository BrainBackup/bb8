import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ILogin } from './types';
import { hashPassword } from '../utils';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async validateUser(mailAddress: string, password: string): Promise<any> {
    const user = await this.usersService.getUserByMailAddress(mailAddress);
    if (user && user.isActive && user.password === hashPassword(password, user.salt)) {
      return {
        id: user.id,
        fullName: user.fullName,
        isAdmin: user.isAdmin,
        email: user.email,
        username: user.username,
        createdAt: user.createdAt
      }
    }
    throw new UnauthorizedException();
  }

  async login(user: ILogin) {
    const res = await this.validateUser(user.mailAddress, user.password);
    return this.jwtService.sign(res);
  }
}