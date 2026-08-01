import { PrismaService } from './prisma.service';
export declare class CategoriasService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        Nombre: string;
        IdCategoria: number;
    }[]>;
    findOne(id: number): Promise<{
        Nombre: string;
        IdCategoria: number;
    }>;
    create(data: {
        Nombre: string;
    }): Promise<{
        Nombre: string;
        IdCategoria: number;
    }>;
    update(id: number, data: Partial<{
        Nombre: string;
    }>): Promise<{
        Nombre: string;
        IdCategoria: number;
    }>;
    remove(id: number): Promise<{
        Nombre: string;
        IdCategoria: number;
    }>;
}
