interface Transaccion {
    id: number;
    tipo: 'ingreso' | 'gasto';
    monto: number;
    estado: 'completado' | 'pendiente';
}

const movimientos: Transaccion[] = [
    { id: 1, tipo: 'ingreso', monto: 1500, estado: 'completado' },
    { id: 2, tipo: 'gasto', monto: 300, estado: 'completado' },
    { id: 3, tipo: 'gasto', monto: 100, estado: 'pendiente' },
    { id: 4, tipo: 'ingreso', monto: 200, estado: 'completado' },
    { id: 5, tipo: 'gasto', monto: 50, estado: 'completado' }
];

// Tu misión es crear la lógica de esta función
function calcularSaldoReal(transacciones: Transaccion[]): number {
    const transaccionesCompletadas = transacciones.filter(transacciones => transacciones.estado === 'completado');

    // "Filtra la lista donde LA transacción sea ingreso".
    return transaccionesCompletadas.filter(transaccion => transaccion.tipo === 'ingreso').reduce((total, transaccion) => total + transaccion.monto, 0) - transaccionesCompletadas.filter(transaccion => transaccion.tipo === 'gasto').reduce((total, transaccion) => total + transaccion.monto, 0);
}

////////////////////////////////////////////////////////////////////////////////////

function calcularSaldoRealSenior(transacciones: Transaccion[]): number {
  return transacciones.reduce((total, transaccion) => {
    // Si no está completado, lo ignoramos y devolvemos el total como venía
    if (transaccion.estado !== 'completado') {
      return total;
    }
    
    // Si es ingreso sumamos, si es gasto restamos
    if (transaccion.tipo === 'ingreso') {
      return total + transaccion.monto;
    } else {
      return total - transaccion.monto;
    }
  }, 0); // El 0 es nuestro saldo inicial
}

console.log("El saldo real es:", calcularSaldoReal(movimientos));
console.log("El saldo real es:", calcularSaldoRealSenior(movimientos));
