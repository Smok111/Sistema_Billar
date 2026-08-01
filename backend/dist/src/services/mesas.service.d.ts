import { PrismaService } from './prisma.service';
export declare class MesasService {
    private prisma;
    constructor(prisma: PrismaService);
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
    create(data: {
        NumeroMesa: number;
        Estado: string;
    }): Promise<{
        IdMesa: number;
        NumeroMesa: number;
        Estado: string;
    }>;
    update(id: number, data: {
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
