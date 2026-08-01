import { ClientesService } from '../services/clientes.service';
export declare class ClientesController {
    private readonly service;
    constructor(service: ClientesService);
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
    create(dto: any): Promise<{
        IdCliente: number;
        Nombre: string;
        Telefono: string;
        Email: string | null;
        Direccion: string | null;
        FechaRegistro: Date;
    }>;
    update(id: number, dto: any): Promise<{
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
