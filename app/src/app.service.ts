import { Injectable } from '@nestjs/common';
import { uptime } from 'process';

import { HealthStatus } from './common/interfaces';

@Injectable()
export class AppService {
  private uptimeToString(uptime: number): string {
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);

    return `${hours.toString().padStart(2, '0')}h${minutes
      .toString()
      .padStart(2, '0')}m${seconds.toString().padStart(2, '0')}s`;
  }

  getStatus(): HealthStatus {
    return new HealthStatus('ok', this.uptimeToString(uptime()));
  }
}
