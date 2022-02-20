import { Controller, Get, Param } from '@nestjs/common';
import { MathOperations } from './utils/math';

@Controller()
export class AppController {
  constructor(
    private readonly mathOperations: MathOperations,
  ) {}

  @Get(':number')
  getNumbers(@Param('number') payload: number) {
    return this.mathOperations.getPrimeAndCompositeNumbers(payload);
  }
}
