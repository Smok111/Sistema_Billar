import { ConsumoDetallesService } from '../services/consumodetalles.service';
export declare class ConsumoDetallesController {
    private readonly service;
    constructor(service: ConsumoDetallesService);
    findAll(): Promise<{
        FechaRegistro: Date;
        IdProducto: number;
        IdConsumo: number;
        IdDetalle: number;
        Cantidad: number;
        PrecioUnitario: import("@prisma/client-runtime-utils").Decimal;
    }[]>;
    findOne(id: number): Promise<{
        FechaRegistro: Date;
        IdProducto: number;
        IdConsumo: number;
        IdDetalle: number;
        Cantidad: number;
        PrecioUnitario: import("@prisma/client-runtime-utils").Decimal;
    }>;
    create(dto: any): Promise<{
        FechaRegistro: Date;
        IdProducto: number;
        IdConsumo: number;
        IdDetalle: number;
        Cantidad: number;
        PrecioUnitario: import("@prisma/client-runtime-utils").Decimal;
    }>;
    update(id: number, dto: any): Promise<{
        FechaRegistro: Date;
        IdProducto: number;
        IdConsumo: number;
        IdDetalle: number;
        Cantidad: number;
        PrecioUnitario: import("@prisma/client-runtime-utils").Decimal;
    }>;
    remove(id: number): Promise<{
        FechaRegistro: Date;
        IdProducto: number;
        IdConsumo: number;
        IdDetalle: number;
        Cantidad: number;
        PrecioUnitario: import("@prisma/client-runtime-utils").Decimal;
    }>;
}
