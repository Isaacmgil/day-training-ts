interface Movimiento {
    id: string;
    monto: number;
    alerta: boolean;
}

const transaccionesHoy: Movimiento[] = [
    { id: 'TX-01', monto: 50, alerta: true },    // No pasa (monto muy bajo)
    { id: 'TX-02', monto: 150, alerta: true },   // PASA
    { id: 'TX-03', monto: 200, alerta: false },  // No pasa (no tiene alerta)
    { id: 'TX-04', monto: 300, alerta: true },   // PASA
    { id: 'TX-05', monto: 90, alerta: true }     // No pasa (monto muy bajo)
];

function calcularDineroRetenido(movimientos: Movimiento[]): number {
    return movimientos
        .filter(movimiento => {
            return movimiento.alerta === true && movimiento.monto > 100;
        })

        .reduce((total, movimiento) => {
            return total + movimiento.monto; 
        }, 0)
}

////////////////////////////////////////////////////////////////////////////////

function calcularDineroRetenidoSenior(movimientos: Movimiento[]): number {
  
  // Encadenamos los métodos directamente sobre la caja que entra
  return movimientos
  
    // 1. EL FILTRO
    // Como no usamos llaves {}, el 'return' es automático.
    // Además, 'movimiento.alerta' ya vale 'true' o 'false', así que no hace 
    // falta escribir '=== true'. TypeScript lo entiende por defecto.
    .filter(movimiento => movimiento.alerta && movimiento.monto > 100)
    
    // 2. LA CALCULADORA
    // También sin llaves. Tomamos el total, le sumamos el monto, e iniciamos en 0.
    .reduce((total, movimiento) => total + movimiento.monto, 0);
}

console.log("Total de dinero en alerta:", calcularDineroRetenido(transaccionesHoy));
console.log("Total de dinero en alerta:", calcularDineroRetenidoSenior(transaccionesHoy));
