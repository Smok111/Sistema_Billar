import { Module } from '@nestjs/common';
import { ProductosService } from '../services/productos.service';
import { ProductosController } from '../controllers/productos.controller';
import { PrismaModule } from '../services/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
