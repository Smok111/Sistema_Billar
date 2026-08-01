import { Injectable } from '@nestjs/common';

@Injectable()
export class BillarTarifasService {
  // Constantes de tarifas
  public readonly PrecioHora = 6.00;
  public readonly PrecioMediaHora = 3.00;
  public readonly PrecioLibrePorMinuto = 0.10;

  /**
   * Calcula el tiempo y costo de consumo de billar
   */
  calcular(inicio: Date, fin: Date | null): { minutos: number; costo: number } {
    if (!fin) {
      return { minutos: 0, costo: 0 };
    }

    const diffMs = fin.getTime() - inicio.getTime();
    const minutosJugados = Math.floor(diffMs / (1000 * 60));

    if (minutosJugados <= 0) {
      return { minutos: 0, costo: 0 };
    }

    let costo = 0;
    
    // Lógica simplificada de cobro (puede ser ajustada según las reglas exactas)
    // Asumiremos cobro por minuto si es tarifa libre, o bloque de hora/media hora
    // Por ahora implementamos la tarifa por minuto (Libre) como base para el ejemplo:
    costo = minutosJugados * this.PrecioLibrePorMinuto;

    return {
      minutos: minutosJugados,
      costo: parseFloat(costo.toFixed(2))
    };
  }
}
