import { Injectable } from '@nestjs/common';
import { HealthCheck, Status } from './app.interface';
@Injectable()
export class AppService {
  checkHealth(): HealthCheck {
    // the status of the connections to the infrastructure services used by the service instance
    // the status of the host, e.g. disk space
    // application specific logic
    const healthCheck: HealthCheck = {
      status: Status.UP,
      services: [{ name: 'mysql', version: '10.1.2', status: Status.UP }]
    }
    return healthCheck;
  }
}
