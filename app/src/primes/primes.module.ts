import { Module } from '@nestjs/common';
import { PrimesService } from './primes.service';
import { PrimesController } from './primes.controller';

@Module({
  controllers: [PrimesController],
  providers: [PrimesService],
})
export class PrimesModule {}
