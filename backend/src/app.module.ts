import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './services/prisma.module';
import { AuthModule } from './config/auth.module';
import { MesasModule } from './config/mesas.module';
import { ClientesModule } from './config/clientes.module';
import { ProductosModule } from './config/productos.module';
import { CategoriasModule } from './config/categorias.module';
import { UsuariosModule } from './config/usuarios.module';
import { RolesModule } from './config/roles.module';
import { ReservasModule } from './config/reservas.module';
import { ConsumosModule } from './config/consumos.module';
import { ConsumoDetallesModule } from './config/consumodetalles.module';

@Module({
  imports: [PrismaModule, AuthModule, MesasModule, ClientesModule, ProductosModule, CategoriasModule, UsuariosModule, RolesModule, ReservasModule, ConsumosModule, ConsumoDetallesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
