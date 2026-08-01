import { UsuariosService } from '../services/usuarios.service';
export declare class UsuariosController {
    private readonly service;
    constructor(service: UsuariosService);
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
    create(dto: any): Promise<{
        IdUsuario: number;
        Correo: string;
        NomUsuario: string;
        ApeUsuario: string;
        Password: string;
        IdRol: number;
    }>;
    update(id: number, dto: any): Promise<{
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
