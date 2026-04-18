//Aquí tienes tu única tarea para graduarte del bloque de Arrays. Tómalo con calma, aplica el encadenamiento y cerramos el día.
//El Escenario: MoneyPal necesita un reporte de las inversiones más pesadas para los accionistas.

interface Movimiento {
  id: string;
  concepto: string;
  monto: number;
  tipo: 'Inversion' | 'Gasto';
}

const movimientos: Movimiento[] = [
  { id: '1', concepto: 'Acciones Apple', monto: 1500, tipo: 'Inversion' },
  { id: '2', concepto: 'Pago Internet', monto: 50, tipo: 'Gasto' },
  { id: '3', concepto: 'Cripto BTC', monto: 2000, tipo: 'Inversion' },
  { id: '4', concepto: 'Alquiler Oficina', monto: 800, tipo: 'Gasto' },
  { id: '5', concepto: 'Bonos del Estado', monto: 500, tipo: 'Inversion' }
];


function obtenerReporteInversiones(movimientos: Movimiento[]) {
    
    const reporteFinalInversiones = movimientos
    .filter(movimiento => movimiento.tipo === 'Inversion')
    .map(movimiento => {
        return {
            concepto: movimiento.concepto,
            monto: movimiento.monto
        }
    })
    .sort((a, b) => b.monto - a.monto)
    return reporteFinalInversiones
    
}

console.log(obtenerReporteInversiones(movimientos));