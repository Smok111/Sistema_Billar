import { Module } from '@nestjs/common';
import { MesasService } from '../services/mesas.service';
import { MesasController } from '../controllers/mesas.controller';
import { PrismaModule } from '../services/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MesasController],
  providers: [MesasService],
})
export class MesasModule {}
