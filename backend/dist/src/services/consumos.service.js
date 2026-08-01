"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
let ConsumosService = class ConsumosService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.consumos.findMany({
            include: {
                Clientes: true,
                Mesas: true,
                Usuarios: true
            }
        });
    }
    async findOne(id) {
        const record = await this.prisma.consumos.findUnique({ where: { IdConsumo: id } });
        if (!record)
            throw new common_1.NotFoundException(`Consumo no encontrado`);
        return record;
    }
    async create(data) { return this.prisma.consumos.create({ data }); }
    async update(id, data) {
        await this.findOne(id);
        return this.prisma.consumos.update({ where: { IdConsumo: id }, data });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.consumos.delete({ where: { IdConsumo: id } });
    }
};
exports.ConsumosService = ConsumosService;
exports.ConsumosService = ConsumosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ConsumosService);
//# sourceMappingURL=consumos.service.js.map