import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { MesasService } from '../services/mesas.service';

@Controller('api/mesa')
export class MesasController {
  constructor(private readonly mesasService: MesasService) {}

  @Get()
  findAll() {
    return this.mesasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.mesasService.findOne(id);
  }

  @Post()
  create(@Body() createMesaDto: { NumeroMesa: number; Estado: string }) {
    return this.mesasService.create(createMesaDto);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMesaDto: { NumeroMesa?: number; Estado?: string }
  ) {
    return this.mesasService.update(id, updateMesaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.mesasService.remove(id);
  }
}
