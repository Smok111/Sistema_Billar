import { ReservasService } from '../services/reservas.service';
export declare class ReservasController {
    private readonly service;
    constructor(service: ReservasService);
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
    create(dto: any): Promise<{
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
    update(id: number, dto: any): Promise<{
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
