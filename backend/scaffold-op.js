const fs = require('fs');
const path = require('path');

const entities = [
  { name: 'Reserva', plural: 'reservas', model: 'reservas', idField: 'IdReserva', createProps: 'IdMesa: number; IdCliente: number; FechaReserva: Date;' },
  { name: 'Consumo', plural: 'consumos', model: 'consumos', idField: 'IdConsumo', createProps: 'IdMesa: number; IdCliente: number; IdUsuario: number;' },
  { name: 'ConsumoDetalle', plural: 'consumodetalles', model: 'consumoDetalles', idField: 'IdDetalle', createProps: 'IdConsumo: number; IdProducto: number; Cantidad: number; PrecioUnitario: any;' }
];

const basePath = path.join(__dirname, 'src');

entities.forEach(entity => {
  const { name, plural, model, idField } = entity;
  const upperPlural = name === 'ConsumoDetalle' ? 'ConsumoDetalles' : name + 's';
  const prefix = name === 'ConsumoDetalle' ? 'consumodetalles' : plural;

  const serviceTpl = `import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class ${upperPlural}Service {
  constructor(private prisma: PrismaService) {}

  async findAll() { return this.prisma.${model}.findMany(); }

  async findOne(id: number) {
    const record = await this.prisma.${model}.findUnique({ where: { ${idField}: id } });
    if (!record) throw new NotFoundException(\`${name} no encontrado\`);
    return record;
  }

  async create(data: any) { return this.prisma.${model}.create({ data }); }

  async update(id: number, data: any) {
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
import { ${upperPlural}Service } from '../services/${prefix}.service';

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
import { ${upperPlural}Service } from '../services/${prefix}.service';
import { ${upperPlural}Controller } from '../controllers/${prefix}.controller';
import { PrismaModule } from '../services/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [${upperPlural}Controller],
  providers: [${upperPlural}Service],
})
export class ${upperPlural}Module {}
`;

  fs.writeFileSync(path.join(basePath, 'services', `${prefix}.service.ts`), serviceTpl);
  fs.writeFileSync(path.join(basePath, 'controllers', `${prefix}.controller.ts`), controllerTpl);
  fs.writeFileSync(path.join(basePath, 'config', `${prefix}.module.ts`), moduleTpl);
});

console.log('Archivos operativos generados exitosamente.');
