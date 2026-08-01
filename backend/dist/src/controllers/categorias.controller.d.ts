import { CategoriasService } from '../services/categorias.service';
export declare class CategoriasController {
    private readonly service;
    constructor(service: CategoriasService);
    findAll(): Promise<{
        Nombre: string;
        IdCategoria: number;
    }[]>;
    findOne(id: number): Promise<{
        Nombre: string;
        IdCategoria: number;
    }>;
    create(dto: any): Promise<{
        Nombre: string;
        IdCategoria: number;
    }>;
    update(id: number, dto: any): Promise<{
        Nombre: string;
        IdCategoria: number;
    }>;
    remove(id: number): Promise<{
        Nombre: string;
        IdCategoria: number;
    }>;
}
