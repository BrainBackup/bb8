import { Controller, Get } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';

@Controller('/auth')
export class AuthenticationController {
  constructor(private readonly appService: AuthenticationService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
