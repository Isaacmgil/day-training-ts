//En la pantalla principal de MoneyPal, queremos mostrarle al usuario sus últimos movimientos exitosos, pero de una forma que un humano pueda leer rápido en su teléfono.

//Tu misión: Filtrar solo los movimientos que ya están completados y transformarlos en una lista de mensajes de texto listos para mostrarse en la pantalla.

interface Operacion {
  id: string;
  tipo: 'Transferencia' | 'Pago de Servicio' | 'Retiro en Cajero';
  monto: number;
  estado: 'Completado' | 'Pendiente' | 'Fallido';
}

const historialAyer: Operacion[] = [
  { id: 'OP-101', tipo: 'Transferencia', monto: 150, estado: 'Completado' },
  { id: 'OP-102', tipo: 'Pago de Servicio', monto: 45, estado: 'Pendiente' },
  { id: 'OP-103', tipo: 'Retiro en Cajero', monto: 20, estado: 'Completado' },
  { id: 'OP-104', tipo: 'Transferencia', monto: 500, estado: 'Fallido' },
  { id: 'OP-105', tipo: 'Pago de Servicio', monto: 15, estado: 'Completado' }
];

// 🚨 A PARTIR DE AQUÍ ESTÁS SOLO 🚨
function historialCompletado(historial: Operacion[]): string[]{

    return historial 
    .filter(operacion => operacion.estado === 'Completado')
    .map(operacion => `✅ Operación ${operacion.id}: ${operacion.tipo} por ${operacion.monto} `)
}

const operacionHistorial = historialCompletado(historialAyer); 
console.log("Transacciones Completadas: ") 
operacionHistorial.forEach(operacion => console.log(operacion))
