import { Injectable } from "@nestjs/common";


@Injectable()
export class MathOperations {

  public compositeNumbers(payload: number) {
    let count = 0;
    let i = 1
    const compositeNumbers = [];

    while (payload >= i) {
      if (payload % i == 0) {
        count++;
        compositeNumbers.push(i);
      }
      i++;
    }

    return compositeNumbers
  }

  public primeNumber(payload: number): number[] {
    const primeNumbers = []
    let i = 1;
    var count = 0;

    for (i = 1; i <= payload; i++) {
      if (payload % i == 0) {
        count++;
        primeNumbers.push(i);
      }
    }

    return primeNumbers.length === 2 ? primeNumbers : [];
  }

  public getPrimeAndCompositeNumbers(payload: number) {
    return {
      inputNumber: payload,
      primeNumbers: this.primeNumber(payload),
      compositeNumbers: this.compositeNumbers(payload),
    }
  }
}