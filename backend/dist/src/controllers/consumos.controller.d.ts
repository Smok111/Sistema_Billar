import { ConsumosService } from '../services/consumos.service';
export declare class ConsumosController {
    private readonly service;
    constructor(service: ConsumosService);
    findAll(): Promise<({
        Usuarios: {
            IdUsuario: number;
            Correo: string;
            NomUsuario: string;
            ApeUsuario: string;
            Password: string;
            IdRol: number;
        };
        Mesas: {
            IdMesa: number;
            NumeroMesa: number;
            Estado: string;
        };
        Clientes: {
            IdCliente: number;
            Nombre: string;
            Telefono: string;
            Email: string | null;
            Direccion: string | null;
            FechaRegistro: Date;
        };
    } & {
        IdUsuario: number;
        IdMesa: number;
        Estado: string;
        IdCliente: number;
        IdConsumo: number;
        FechaInicio: Date;
        FechaFin: Date | null;
        TipoCobro: string;
        PrecioHora: import("@prisma/client-runtime-utils").Decimal;
        PrecioMediaHora: import("@prisma/client-runtime-utils").Decimal;
        PrecioLibrePorMinuto: import("@prisma/client-runtime-utils").Decimal;
        MinutosJugados: number | null;
        CostoMesa: import("@prisma/client-runtime-utils").Decimal;
        TotalProductos: import("@prisma/client-runtime-utils").Decimal;
        Total: import("@prisma/client-runtime-utils").Decimal;
    })[]>;
    findOne(id: number): Promise<{
        IdUsuario: number;
        IdMesa: number;
        Estado: string;
        IdCliente: number;
        IdConsumo: number;
        FechaInicio: Date;
        FechaFin: Date | null;
        TipoCobro: string;
        PrecioHora: import("@prisma/client-runtime-utils").Decimal;
        PrecioMediaHora: import("@prisma/client-runtime-utils").Decimal;
        PrecioLibrePorMinuto: import("@prisma/client-runtime-utils").Decimal;
        MinutosJugados: number | null;
        CostoMesa: import("@prisma/client-runtime-utils").Decimal;
        TotalProductos: import("@prisma/client-runtime-utils").Decimal;
        Total: import("@prisma/client-runtime-utils").Decimal;
    }>;
    create(dto: any): Promise<{
        IdUsuario: number;
        IdMesa: number;
        Estado: string;
        IdCliente: number;
        IdConsumo: number;
        FechaInicio: Date;
        FechaFin: Date | null;
        TipoCobro: string;
        PrecioHora: import("@prisma/client-runtime-utils").Decimal;
        PrecioMediaHora: import("@prisma/client-runtime-utils").Decimal;
        PrecioLibrePorMinuto: import("@prisma/client-runtime-utils").Decimal;
        MinutosJugados: number | null;
        CostoMesa: import("@prisma/client-runtime-utils").Decimal;
        TotalProductos: import("@prisma/client-runtime-utils").Decimal;
        Total: import("@prisma/client-runtime-utils").Decimal;
    }>;
    update(id: number, dto: any): Promise<{
        IdUsuario: number;
        IdMesa: number;
        Estado: string;
        IdCliente: number;
        IdConsumo: number;
        FechaInicio: Date;
        FechaFin: Date | null;
        TipoCobro: string;
        PrecioHora: import("@prisma/client-runtime-utils").Decimal;
        PrecioMediaHora: import("@prisma/client-runtime-utils").Decimal;
        PrecioLibrePorMinuto: import("@prisma/client-runtime-utils").Decimal;
        MinutosJugados: number | null;
        CostoMesa: import("@prisma/client-runtime-utils").Decimal;
        TotalProductos: import("@prisma/client-runtime-utils").Decimal;
        Total: import("@prisma/client-runtime-utils").Decimal;
    }>;
    remove(id: number): Promise<{
        IdUsuario: number;
        IdMesa: number;
        Estado: string;
        IdCliente: number;
        IdConsumo: number;
        FechaInicio: Date;
        FechaFin: Date | null;
        TipoCobro: string;
        PrecioHora: import("@prisma/client-runtime-utils").Decimal;
        PrecioMediaHora: import("@prisma/client-runtime-utils").Decimal;
        PrecioLibrePorMinuto: import("@prisma/client-runtime-utils").Decimal;
        MinutosJugados: number | null;
        CostoMesa: import("@prisma/client-runtime-utils").Decimal;
        TotalProductos: import("@prisma/client-runtime-utils").Decimal;
        Total: import("@prisma/client-runtime-utils").Decimal;
    }>;
}
