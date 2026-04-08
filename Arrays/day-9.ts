//Imagina que MoneyPal ahora permite a los usuarios registrar sus operaciones de trading. El usuario quiere presionar un botón y ver rápidamente cuánto dinero exacto ha ganado en total, pero solo tomando en cuenta las operaciones que ya están cerradas y que terminaron en ganancia.

//Tu misión: Filtrar los trades correctos, sumar sus ganancias y devolver un mensaje final bonito listo para la pantalla.

interface Trade {
  ticket: string;
  activo: string; 
  estado: 'Abierto' | 'Cerrado';
  beneficioUSD: number; // Puede ser positivo (ganancia) o negativo (pérdida)
}

const historialTrades: Trade[] = [
  { ticket: 'T001', activo: 'XAU/USD', estado: 'Cerrado', beneficioUSD: 150 },
  { ticket: 'T002', activo: 'EUR/USD', estado: 'Cerrado', beneficioUSD: -50 },
  { ticket: 'T003', activo: 'XAU/USD', estado: 'Abierto', beneficioUSD: 25 },
  { ticket: 'T004', activo: 'GBP/JPY', estado: 'Cerrado', beneficioUSD: 300 },
  { ticket: 'T005', activo: 'US30', estado: 'Cerrado', beneficioUSD: -100 }
];

function calcularGanancias (historialTrades: Trade[]): string {
    const totalGanado = historialTrades.filter(trade => trade.estado === 'Cerrado' && trade.beneficioUSD > 0)
    const gananciaTotal = totalGanado.reduce((alcancia, trade) => alcancia + trade.beneficioUSD, 0); 

    return `📈 ¡Excelente trabajo! Tu beneficio total en operaciones cerradas es de ${gananciaTotal} dólares.`
}

const mensajeGanancias = calcularGanancias(historialTrades); 
console.log(mensajeGanancias); 