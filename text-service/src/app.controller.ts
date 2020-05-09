import { Controller, Get } from '@nestjs/common';
import { AppService, HealthCheck } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health')
  getHello(): HealthCheck {
    return this.appService.checkHealth();
  }
  
}
