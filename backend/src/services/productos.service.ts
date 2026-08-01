import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class ProductosService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.productos.findMany();
  }

  async findOne(id: number) {
    const record = await this.prisma.productos.findUnique({ where: { IdProducto: id } });
    if (!record) throw new NotFoundException(`Producto no encontrado`);
    return record;
  }

  async create(data: { Nombre: string; Precio: any; IdCategoria: number; }) {
    return this.prisma.productos.create({ data });
  }

  async update(id: number, data: Partial<{ Nombre: string; Precio: any; IdCategoria: number; }>) {
    await this.findOne(id);
    return this.prisma.productos.update({ where: { IdProducto: id }, data });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.productos.delete({ where: { IdProducto: id } });
  }
}
