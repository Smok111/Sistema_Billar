import { Module } from '@nestjs/common';
import { ConsumosService } from '../services/consumos.service';
import { ConsumosController } from '../controllers/consumos.controller';
import { PrismaModule } from '../services/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ConsumosController],
  providers: [ConsumosService],
})
export class ConsumosModule {}
