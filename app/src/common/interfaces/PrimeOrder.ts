interface PrimeOrderInterface {
  number: number;
}

export default class PrimeOrder implements PrimeOrderInterface {
  number: number;

  constructor(number: number) {
    this.number = number;
  }
}
