import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class RolesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.roles.findMany();
  }

  async findOne(id: number) {
    const record = await this.prisma.roles.findUnique({ where: { IdRol: id } });
    if (!record) throw new NotFoundException(`Rol no encontrado`);
    return record;
  }

  async create(data: { NomRol: string; DesRol: string; Permisos?: string; }) {
    return this.prisma.roles.create({ data });
  }

  async update(id: number, data: Partial<{ NomRol: string; DesRol: string; Permisos: string; }>) {
    await this.findOne(id);
    return this.prisma.roles.update({ where: { IdRol: id }, data });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.roles.delete({ where: { IdRol: id } });
  }
}
