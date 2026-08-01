import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class ConsumosService {
  constructor(private prisma: PrismaService) {}

  async findAll() { 
    return this.prisma.consumos.findMany({
      include: {
        Clientes: true,
        Mesas: true,
        Usuarios: true
      }
    }); 
  }

  async findOne(id: number) {
    const record = await this.prisma.consumos.findUnique({ where: { IdConsumo: id } });
    if (!record) throw new NotFoundException(`Consumo no encontrado`);
    return record;
  }

  async create(data: any) { return this.prisma.consumos.create({ data }); }

  async update(id: number, data: any) {
    await this.findOne(id);
    return this.prisma.consumos.update({ where: { IdConsumo: id }, data });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.consumos.delete({ where: { IdConsumo: id } });
  }
}
