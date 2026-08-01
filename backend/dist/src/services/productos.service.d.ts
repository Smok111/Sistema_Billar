import { PrismaService } from './prisma.service';
export declare class ProductosService {
    private prisma;
    constructor(prisma: PrismaService);
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
    create(data: {
        Nombre: string;
        Precio: any;
        IdCategoria: number;
    }): Promise<{
        Nombre: string;
        IdProducto: number;
        Precio: import("@prisma/client-runtime-utils").Decimal;
        IdCategoria: number;
        ImagenUrl: string | null;
    }>;
    update(id: number, data: Partial<{
        Nombre: string;
        Precio: any;
        IdCategoria: number;
    }>): Promise<{
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
