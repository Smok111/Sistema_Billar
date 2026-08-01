import { Module } from '@nestjs/common';
import { CategoriasService } from '../services/categorias.service';
import { CategoriasController } from '../controllers/categorias.controller';
import { PrismaModule } from '../services/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CategoriasController],
  providers: [CategoriasService],
})
export class CategoriasModule {}
