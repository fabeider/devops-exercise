import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { HealthStatus } from './common/interfaces';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('api', () => {
    it('should return health status instance', function () {
      const tested = appController.getStatus();

      expect(tested).toBeInstanceOf(HealthStatus);
      expect(tested).toHaveProperty('health', 'ok');
      expect(tested).toHaveProperty('uptime');
    });
  });
});
