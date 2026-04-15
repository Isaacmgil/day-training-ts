//Imagina que estás programando el módulo que le muestra al usuario el Total de Dinero Depositado en su cuenta de MoneyPal.

//El servidor nos envía un historial de transacciones, pero hay un problema: el sistema viejo que procesaba los pagos tenía fallos. A veces registraba depósitos con valores negativos por error (glitches del sistema), y además, la base de datos no guarda dólares, sino centavos.

//Tu misión: Calcular el total real en dólares de los depósitos válidos.

interface TransaccionAPI {
  id: string;
  tipo: 'deposito' | 'retiro';
  estado: 'completado' | 'pendiente' | 'rechazado';
  montoCentavos: number;
}

const datosBrutos: TransaccionAPI[] = [
  { id: 'TX01', tipo: 'deposito', estado: 'completado', montoCentavos: 5000 }, // Válido (50 dólares)
  { id: 'TX02', tipo: 'retiro', estado: 'completado', montoCentavos: 2000 },   // Ignorar (es retiro)
  { id: 'TX03', tipo: 'deposito', estado: 'pendiente', montoCentavos: 10000 }, // Ignorar (no está completado)
  { id: 'TX04', tipo: 'deposito', estado: 'completado', montoCentavos: -300 }, // ERROR DE SISTEMA (Ignorar negativos)
  { id: 'TX05', tipo: 'deposito', estado: 'completado', montoCentavos: 7550 }  // Válido (75.5 dólares)
];

function calcularDepositosValidos(transacciones: TransaccionAPI[]): number {
  return transacciones 
  .filter(transaccion => transaccion.estado === 'completado' && transaccion.montoCentavos > 0 && transaccion.tipo === 'deposito')
  .map(transaccion => {return (transaccion.montoCentavos / 100)})
  .reduce((total, totalDolares) => total + totalDolares, 0)
}

console.log("Total de depósitos válidos en dólares: $", calcularDepositosValidos(datosBrutos));