import { PrismaService } from './prisma.service';
export declare class ReservasService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        IdMesa: number;
        Estado: string;
        IdCliente: number;
        IdReserva: number;
        FechaReserva: Date;
        HoraInicio: string;
        HoraFin: string;
        FechaHoraInicioJuego: Date | null;
        FechaHoraFinJuego: Date | null;
        Observaciones: string | null;
        NumeroPersonas: number;
    }[]>;
    findOne(id: number): Promise<{
        IdMesa: number;
        Estado: string;
        IdCliente: number;
        IdReserva: number;
        FechaReserva: Date;
        HoraInicio: string;
        HoraFin: string;
        FechaHoraInicioJuego: Date | null;
        FechaHoraFinJuego: Date | null;
        Observaciones: string | null;
        NumeroPersonas: number;
    }>;
    create(data: any): Promise<{
        IdMesa: number;
        Estado: string;
        IdCliente: number;
        IdReserva: number;
        FechaReserva: Date;
        HoraInicio: string;
        HoraFin: string;
        FechaHoraInicioJuego: Date | null;
        FechaHoraFinJuego: Date | null;
        Observaciones: string | null;
        NumeroPersonas: number;
    }>;
    update(id: number, data: any): Promise<{
        IdMesa: number;
        Estado: string;
        IdCliente: number;
        IdReserva: number;
        FechaReserva: Date;
        HoraInicio: string;
        HoraFin: string;
        FechaHoraInicioJuego: Date | null;
        FechaHoraFinJuego: Date | null;
        Observaciones: string | null;
        NumeroPersonas: number;
    }>;
    remove(id: number): Promise<{
        IdMesa: number;
        Estado: string;
        IdCliente: number;
        IdReserva: number;
        FechaReserva: Date;
        HoraInicio: string;
        HoraFin: string;
        FechaHoraInicioJuego: Date | null;
        FechaHoraFinJuego: Date | null;
        Observaciones: string | null;
        NumeroPersonas: number;
    }>;
}
