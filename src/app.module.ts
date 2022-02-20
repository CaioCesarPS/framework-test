import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MathOperations } from './utils/math';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [MathOperations],
})
export class AppModule {}
