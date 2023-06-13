interface PrimeCheckInterface {
  number: number;
  prime: boolean;
}

export default class PrimeCheck implements PrimeCheckInterface {
  number: number;
  prime: boolean;

  constructor(number: number, prime: boolean) {
    this.number = number;
    this.prime = prime;
  }
}
