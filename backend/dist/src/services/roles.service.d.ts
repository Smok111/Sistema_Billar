import { PrismaService } from './prisma.service';
export declare class RolesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        IdRol: number;
        NomRol: string;
        DesRol: string;
        Permisos: string;
    }[]>;
    findOne(id: number): Promise<{
        IdRol: number;
        NomRol: string;
        DesRol: string;
        Permisos: string;
    }>;
    create(data: {
        NomRol: string;
        DesRol: string;
        Permisos?: string;
    }): Promise<{
        IdRol: number;
        NomRol: string;
        DesRol: string;
        Permisos: string;
    }>;
    update(id: number, data: Partial<{
        NomRol: string;
        DesRol: string;
        Permisos: string;
    }>): Promise<{
        IdRol: number;
        NomRol: string;
        DesRol: string;
        Permisos: string;
    }>;
    remove(id: number): Promise<{
        IdRol: number;
        NomRol: string;
        DesRol: string;
        Permisos: string;
    }>;
}
