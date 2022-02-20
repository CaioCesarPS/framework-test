import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { MathOperations } from './utils/math';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [MathOperations],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return a object with the prime numbers and composite numbers', () => {
      expect(appController.getNumbers(12)).toStrictEqual({
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
