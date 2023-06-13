import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

import { HealthStatus } from './common/interfaces';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api/health')
  getStatus(): HealthStatus {
    return this.appService.getStatus();
  }
}
