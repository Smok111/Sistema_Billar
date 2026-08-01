export declare class BillarTarifasService {
    readonly PrecioHora = 6;
    readonly PrecioMediaHora = 3;
    readonly PrecioLibrePorMinuto = 0.1;
    calcular(inicio: Date, fin: Date | null): {
        minutos: number;
        costo: number;
    };
}
