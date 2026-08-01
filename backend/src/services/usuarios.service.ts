import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.usuarios.findMany({
      include: {
        Roles: true
      }
    });
  }

  async findOne(id: number) {
    const record = await this.prisma.usuarios.findUnique({ where: { IdUsuario: id } });
    if (!record) throw new NotFoundException(`Usuario no encontrado`);
    return record;
  }

  async create(data: any) {
    return this.prisma.usuarios.create({ data });
  }

  async update(id: number, data: any) {
    await this.findOne(id);
    return this.prisma.usuarios.update({ where: { IdUsuario: id }, data });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.usuarios.delete({ where: { IdUsuario: id } });
  }
}
