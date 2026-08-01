import { PrismaService } from './prisma.service';
export declare class ConsumoDetallesService {
    private prisma;
    constructor(prisma: PrismaService);
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
    create(data: any): Promise<{
        FechaRegistro: Date;
        IdProducto: number;
        IdConsumo: number;
        IdDetalle: number;
        Cantidad: number;
        PrecioUnitario: import("@prisma/client-runtime-utils").Decimal;
    }>;
    update(id: number, data: any): Promise<{
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
