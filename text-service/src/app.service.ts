import { Injectable } from '@nestjs/common';

interface Service {
  name: string;
  version: string;
  status: string;
}
export interface HealthCheck {
  status: string;
  services: Service[];
}
@Injectable()
export class AppService {
  checkHealth(): HealthCheck {
    return { status: 'UP', services: [{ name: 'elastic', version: '7.5.1', status: 'UP' }]}
  }
}
