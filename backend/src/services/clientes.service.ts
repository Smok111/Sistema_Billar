import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class ClientesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.clientes.findMany();
  }

  async findOne(id: number) {
    const record = await this.prisma.clientes.findUnique({ where: { IdCliente: id } });
    if (!record) throw new NotFoundException(`Cliente no encontrado`);
    return record;
  }

  async create(data: any) {
    return this.prisma.clientes.create({ data });
  }

  async update(id: number, data: any) {
    await this.findOne(id);
    return this.prisma.clientes.update({ where: { IdCliente: id }, data });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.clientes.delete({ where: { IdCliente: id } });
  }
}
