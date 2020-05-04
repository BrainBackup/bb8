import { Controller, Get, Post, Body, UsePipes, UseGuards } from '@nestjs/common';
import * as Joi from '@hapi/joi';
import { AuthService } from './auth.service';
import { ILogin } from './types';
import { JoiValidationPipe } from '../validators';

const createLoginSchema = () =>
    Joi.object({
        mailAddress: Joi.string().required(),
        password: Joi.string().required()
    });
@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UsePipes(new JoiValidationPipe(createLoginSchema()))
  async login(@Body() user: ILogin) {
    return await this.authService.login(user);
  }
}
