const fs = require('fs');
const path = require('path');

const entities = [
  { name: 'Cliente', plural: 'clientes', model: 'clientes', idField: 'IdCliente', createProps: 'Nombre: string; Telefono: string;' },
  { name: 'Producto', plural: 'productos', model: 'productos', idField: 'IdProducto', createProps: 'Nombre: string; Precio: any; IdCategoria: number;' },
  { name: 'Categoria', plural: 'categorias', model: 'categoriasProductos', idField: 'IdCategoria', createProps: 'Nombre: string;' },
  { name: 'Usuario', plural: 'usuarios', model: 'usuarios', idField: 'IdUsuario', createProps: 'NomUsuario: string; Correo: string; IdRol: number;' },
  { name: 'Rol', plural: 'roles', model: 'roles', idField: 'IdRol', createProps: 'NomRol: string; DesRol: string;' }
];

const basePath = path.join(__dirname, 'src');

entities.forEach(entity => {
  const { name, plural, model, idField, createProps } = entity;
  const upperPlural = plural.charAt(0).toUpperCase() + plural.slice(1);
  const upperName = name;

  const serviceTpl = `import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class ${upperPlural}Service {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.${model}.findMany();
  }

  async findOne(id: number) {
    const record = await this.prisma.${model}.findUnique({ where: { ${idField}: id } });
    if (!record) throw new NotFoundException(\`${name} no encontrado\`);
    return record;
  }

  async create(data: { ${createProps} }) {
    return this.prisma.${model}.create({ data });
  }

  async update(id: number, data: Partial<{ ${createProps} }>) {
    await this.findOne(id);
    return this.prisma.${model}.update({ where: { ${idField}: id }, data });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.${model}.delete({ where: { ${idField}: id } });
  }
}
`;

  const controllerTpl = `import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { ${upperPlural}Service } from '../services/${plural}.service';

@Controller('api/${name.toLowerCase()}')
export class ${upperPlural}Controller {
  constructor(private readonly service: ${upperPlural}Service) {}

  @Get()
  findAll() { return this.service.findAll(); }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) { return this.service.findOne(id); }

  @Post()
  create(@Body() dto: any) { return this.service.create(dto); }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: any) { return this.service.update(id, dto); }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) { return this.service.remove(id); }
}
`;

  const moduleTpl = `import { Module } from '@nestjs/common';
import { ${upperPlural}Service } from '../services/${plural}.service';
import { ${upperPlural}Controller } from '../controllers/${plural}.controller';
import { PrismaModule } from '../services/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [${upperPlural}Controller],
  providers: [${upperPlural}Service],
})
export class ${upperPlural}Module {}
`;

  fs.writeFileSync(path.join(basePath, 'services', `${plural}.service.ts`), serviceTpl);
  fs.writeFileSync(path.join(basePath, 'controllers', `${plural}.controller.ts`), controllerTpl);
  fs.writeFileSync(path.join(basePath, 'config', `${plural}.module.ts`), moduleTpl);
});

console.log('Archivos generados exitosamente.');
