import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class MesasService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.mesas.findMany();
  }

  async findOne(id: number) {
    const mesa = await this.prisma.mesas.findUnique({
      where: { IdMesa: id },
    });
    if (!mesa) throw new NotFoundException(`Mesa con ID ${id} no encontrada`);
    return mesa;
  }

  async create(data: { NumeroMesa: number; Estado: string }) {
    return this.prisma.mesas.create({
      data,
    });
  }

  async update(id: number, data: { NumeroMesa?: number; Estado?: string }) {
    await this.findOne(id); // verifica si existe
    return this.prisma.mesas.update({
      where: { IdMesa: id },
      data,
    });
  }

  async remove(id: number) {
    await this.findOne(id); // verifica si existe
    return this.prisma.mesas.delete({
      where: { IdMesa: id },
    });
  }
}
