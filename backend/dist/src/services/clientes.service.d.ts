import { PrismaService } from './prisma.service';
export declare class ClientesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        IdCliente: number;
        Nombre: string;
        Telefono: string;
        Email: string | null;
        Direccion: string | null;
        FechaRegistro: Date;
    }[]>;
    findOne(id: number): Promise<{
        IdCliente: number;
        Nombre: string;
        Telefono: string;
        Email: string | null;
        Direccion: string | null;
        FechaRegistro: Date;
    }>;
    create(data: any): Promise<{
        IdCliente: number;
        Nombre: string;
        Telefono: string;
        Email: string | null;
        Direccion: string | null;
        FechaRegistro: Date;
    }>;
    update(id: number, data: any): Promise<{
        IdCliente: number;
        Nombre: string;
        Telefono: string;
        Email: string | null;
        Direccion: string | null;
        FechaRegistro: Date;
    }>;
    remove(id: number): Promise<{
        IdCliente: number;
        Nombre: string;
        Telefono: string;
        Email: string | null;
        Direccion: string | null;
        FechaRegistro: Date;
    }>;
}
