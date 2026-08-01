import { Module } from '@nestjs/common';
import { ConsumoDetallesService } from '../services/consumodetalles.service';
import { ConsumoDetallesController } from '../controllers/consumodetalles.controller';
import { PrismaModule } from '../services/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ConsumoDetallesController],
  providers: [ConsumoDetallesService],
})
export class ConsumoDetallesModule {}
