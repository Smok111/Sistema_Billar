import { MesasService } from '../services/mesas.service';
export declare class MesasController {
    private readonly mesasService;
    constructor(mesasService: MesasService);
    findAll(): Promise<{
        IdMesa: number;
        NumeroMesa: number;
        Estado: string;
    }[]>;
    findOne(id: number): Promise<{
        IdMesa: number;
        NumeroMesa: number;
        Estado: string;
    }>;
    create(createMesaDto: {
        NumeroMesa: number;
        Estado: string;
    }): Promise<{
        IdMesa: number;
        NumeroMesa: number;
        Estado: string;
    }>;
    update(id: number, updateMesaDto: {
        NumeroMesa?: number;
        Estado?: string;
    }): Promise<{
        IdMesa: number;
        NumeroMesa: number;
        Estado: string;
    }>;
    remove(id: number): Promise<{
        IdMesa: number;
        NumeroMesa: number;
        Estado: string;
    }>;
}
