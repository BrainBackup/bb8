import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { HealthCheck } from './app.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health')
  checkHealth(): HealthCheck {
    return this.appService.checkHealth();
  }
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}
