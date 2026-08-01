import { RolesService } from '../services/roles.service';
export declare class RolesController {
    private readonly service;
    constructor(service: RolesService);
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
    create(dto: any): Promise<{
        IdRol: number;
        NomRol: string;
        DesRol: string;
        Permisos: string;
    }>;
    update(id: number, dto: any): Promise<{
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
