import { Test, TestingModule } from '@nestjs/testing';
import { PrimesController } from './primes.controller';
import { PrimesService } from './primes.service';

import { PrimeCheck } from '../common/interfaces';

describe('PrimesController', () => {
  let controller: PrimesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrimesController],
      providers: [PrimesService],
    }).compile();

    controller = module.get<PrimesController>(PrimesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('primes', () => {
    it('should be PrimeCheck instance', function () {
      const tested = controller.checkIfPrime({ number: 2 });

      expect(tested).toBeInstanceOf(PrimeCheck);
      expect(tested).toHaveProperty('number', 2);
      expect(tested).toHaveProperty('prime', true);
    });

    it('should return -1 is not a prime number', function () {
      const tested = controller.checkIfPrime({ number: -1 });

      expect(tested).toHaveProperty('number', -1);
      expect(tested).toHaveProperty('prime', false);
    });

    it('should return 0 is not a prime number', function () {
      const tested = controller.checkIfPrime({ number: 0 });

      expect(tested).toHaveProperty('number', 0);
      expect(tested).toHaveProperty('prime', false);
    });

    it('should return 2 is a prime number', function () {
      const tested = controller.checkIfPrime({ number: 2 });

      expect(tested).toHaveProperty('number', 2);
      expect(tested).toHaveProperty('prime', true);
    });

    it('should return 18 is not prime number', function () {
      const tested = controller.checkIfPrime({ number: 18 });

      expect(tested).toHaveProperty('number', 18);
      expect(tested).toHaveProperty('prime', false);
    });

    it('should return 5166647 is  prime number', function () {
      const tested = controller.checkIfPrime({ number: 5166647 });

      expect(tested).toHaveProperty('number', 5166647);
      expect(tested).toHaveProperty('prime', true);
    });
  });
});
