import { Body, Controller, Post } from '@nestjs/common';

import { PrimesService } from './primes.service';

import { PrimeCheck, PrimeOrder } from '../common/interfaces';

@Controller('prime')
export class PrimesController {
  constructor(private readonly primesService: PrimesService) {}

  @Post('/')
  checkIfPrime(@Body() primeOrder: PrimeOrder): PrimeCheck {
    return this.primesService.checkIfPrime(primeOrder);
  }
}
