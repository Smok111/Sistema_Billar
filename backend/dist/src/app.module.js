"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./services/prisma.module");
const auth_module_1 = require("./config/auth.module");
const mesas_module_1 = require("./config/mesas.module");
const clientes_module_1 = require("./config/clientes.module");
const productos_module_1 = require("./config/productos.module");
const categorias_module_1 = require("./config/categorias.module");
const usuarios_module_1 = require("./config/usuarios.module");
const roles_module_1 = require("./config/roles.module");
const reservas_module_1 = require("./config/reservas.module");
const consumos_module_1 = require("./config/consumos.module");
const consumodetalles_module_1 = require("./config/consumodetalles.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, auth_module_1.AuthModule, mesas_module_1.MesasModule, clientes_module_1.ClientesModule, productos_module_1.ProductosModule, categorias_module_1.CategoriasModule, usuarios_module_1.UsuariosModule, roles_module_1.RolesModule, reservas_module_1.ReservasModule, consumos_module_1.ConsumosModule, consumodetalles_module_1.ConsumoDetallesModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map