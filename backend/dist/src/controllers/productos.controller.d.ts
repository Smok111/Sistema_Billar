import { ProductosService } from '../services/productos.service';
export declare class ProductosController {
    private readonly service;
    constructor(service: ProductosService);
    findAll(): Promise<{
        Nombre: string;
        IdProducto: number;
        Precio: import("@prisma/client-runtime-utils").Decimal;
        IdCategoria: number;
        ImagenUrl: string | null;
    }[]>;
    findOne(id: number): Promise<{
        Nombre: string;
        IdProducto: number;
        Precio: import("@prisma/client-runtime-utils").Decimal;
        IdCategoria: number;
        ImagenUrl: string | null;
    }>;
    create(dto: any): Promise<{
        Nombre: string;
        IdProducto: number;
        Precio: import("@prisma/client-runtime-utils").Decimal;
        IdCategoria: number;
        ImagenUrl: string | null;
    }>;
    update(id: number, dto: any): Promise<{
        Nombre: string;
        IdProducto: number;
        Precio: import("@prisma/client-runtime-utils").Decimal;
        IdCategoria: number;
        ImagenUrl: string | null;
    }>;
    remove(id: number): Promise<{
        Nombre: string;
        IdProducto: number;
        Precio: import("@prisma/client-runtime-utils").Decimal;
        IdCategoria: number;
        ImagenUrl: string | null;
    }>;
}
