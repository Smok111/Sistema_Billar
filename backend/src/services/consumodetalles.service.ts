import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class ConsumoDetallesService {
  constructor(private prisma: PrismaService) {}

  async findAll() { return this.prisma.consumoDetalles.findMany(); }

  async findOne(id: number) {
    const record = await this.prisma.consumoDetalles.findUnique({ where: { IdDetalle: id } });
    if (!record) throw new NotFoundException(`ConsumoDetalle no encontrado`);
    return record;
  }

  async create(data: any) { return this.prisma.consumoDetalles.create({ data }); }

  async update(id: number, data: any) {
    await this.findOne(id);
    return this.prisma.consumoDetalles.update({ where: { IdDetalle: id }, data });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.consumoDetalles.delete({ where: { IdDetalle: id } });
  }
}
