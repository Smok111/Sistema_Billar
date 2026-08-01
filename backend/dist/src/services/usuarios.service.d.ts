import { PrismaService } from './prisma.service';
export declare class UsuariosService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<({
        Roles: {
            IdRol: number;
            NomRol: string;
            DesRol: string;
            Permisos: string;
        };
    } & {
        IdUsuario: number;
        Correo: string;
        NomUsuario: string;
        ApeUsuario: string;
        Password: string;
        IdRol: number;
    })[]>;
    findOne(id: number): Promise<{
        IdUsuario: number;
        Correo: string;
        NomUsuario: string;
        ApeUsuario: string;
        Password: string;
        IdRol: number;
    }>;
    create(data: any): Promise<{
        IdUsuario: number;
        Correo: string;
        NomUsuario: string;
        ApeUsuario: string;
        Password: string;
        IdRol: number;
    }>;
    update(id: number, data: any): Promise<{
        IdUsuario: number;
        Correo: string;
        NomUsuario: string;
        ApeUsuario: string;
        Password: string;
        IdRol: number;
    }>;
    remove(id: number): Promise<{
        IdUsuario: number;
        Correo: string;
        NomUsuario: string;
        ApeUsuario: string;
        Password: string;
        IdRol: number;
    }>;
}
