"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillarTarifasService = void 0;
const common_1 = require("@nestjs/common");
let BillarTarifasService = class BillarTarifasService {
    PrecioHora = 6.00;
    PrecioMediaHora = 3.00;
    PrecioLibrePorMinuto = 0.10;
    calcular(inicio, fin) {
        if (!fin) {
            return { minutos: 0, costo: 0 };
        }
        const diffMs = fin.getTime() - inicio.getTime();
        const minutosJugados = Math.floor(diffMs / (1000 * 60));
        if (minutosJugados <= 0) {
            return { minutos: 0, costo: 0 };
        }
        let costo = 0;
        costo = minutosJugados * this.PrecioLibrePorMinuto;
        return {
            minutos: minutosJugados,
            costo: parseFloat(costo.toFixed(2))
        };
    }
};
exports.BillarTarifasService = BillarTarifasService;
exports.BillarTarifasService = BillarTarifasService = __decorate([
    (0, common_1.Injectable)()
], BillarTarifasService);
//# sourceMappingURL=billar-tarifas.service.js.map