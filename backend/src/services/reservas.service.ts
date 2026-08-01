import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class ReservasService {
  constructor(private prisma: PrismaService) {}

  async findAll() { return this.prisma.reservas.findMany(); }

  async findOne(id: number) {
    const record = await this.prisma.reservas.findUnique({ where: { IdReserva: id } });
    if (!record) throw new NotFoundException(`Reserva no encontrado`);
    return record;
  }

  async create(data: any) { return this.prisma.reservas.create({ data }); }

  async update(id: number, data: any) {
    await this.findOne(id);
    return this.prisma.reservas.update({ where: { IdReserva: id }, data });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.reservas.delete({ where: { IdReserva: id } });
  }
}
