import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class CategoriasService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.categoriasProductos.findMany();
  }

  async findOne(id: number) {
    const record = await this.prisma.categoriasProductos.findUnique({ where: { IdCategoria: id } });
    if (!record) throw new NotFoundException(`Categoria no encontrado`);
    return record;
  }

  async create(data: { Nombre: string; }) {
    return this.prisma.categoriasProductos.create({ data });
  }

  async update(id: number, data: Partial<{ Nombre: string; }>) {
    await this.findOne(id);
    return this.prisma.categoriasProductos.update({ where: { IdCategoria: id }, data });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.categoriasProductos.delete({ where: { IdCategoria: id } });
  }
}
