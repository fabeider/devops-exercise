import { Injectable } from '@nestjs/common';

import { PrimeCheck, PrimeOrder } from '../common/interfaces';

@Injectable()
export class PrimesService {
  private isPrime(n: number): boolean {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;

    const limit = Math.floor(Math.sqrt(n));

    for (let i = 5; i <= limit; i += 6) {
      if (n % i == 0 || n % (i + 2) == 0) return false;
    }

    return true;
  }

  checkIfPrime(primeOrder: PrimeOrder): PrimeCheck {
    const numberToBeTested = primeOrder.number;

    return new PrimeCheck(numberToBeTested, this.isPrime(numberToBeTested));
  }
}
