import { Module } from '@nestjs/common';
import { ReservasService } from '../services/reservas.service';
import { ReservasController } from '../controllers/reservas.controller';
import { PrismaModule } from '../services/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ReservasController],
  providers: [ReservasService],
})
export class ReservasModule {}
