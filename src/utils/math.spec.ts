import { Test, TestingModule } from '@nestjs/testing';
import { MathOperations } from './math';
import { AppController } from '../app.controller';

describe('MathOperationModule', () => {
  let mathOperations: MathOperations;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [MathOperations],
    }).compile();

    mathOperations = app.get<MathOperations>(MathOperations);
  });

  describe('MathOperationClass', () => {
    it('Composite Numbers functon', () => {
      expect(mathOperations.compositeNumbers(12)).toStrictEqual([1, 2, 3, 4, 6, 12]);
    });

    it('Prime Numbers functon', () => {
      expect(mathOperations.primeNumber(2)).toStrictEqual([1, 2]);
    });

    it('Get Prime and Composite numbers', () => {
      expect(mathOperations.getPrimeAndCompositeNumbers(12)).toStrictEqual({
        "inputNumber": 12,
        "primeNumbers": [],
        "compositeNumbers": [
          1,
          2,
          3,
          4,
          6,
          12
        ]
      });
    });
  });
});
