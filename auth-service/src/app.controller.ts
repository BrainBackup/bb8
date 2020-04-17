import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HealthCheck } from './app.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health')
  checkHealth() {
    return this.appService.checkHealth();
  }
}
