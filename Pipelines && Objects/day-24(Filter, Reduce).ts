//El equipo de finanzas de MoneyPal necesita un indicador en tiempo real en su panel de control. Quieren saber exactamente cuánto dinero limpio ha ganado la plataforma hoy, pero con condiciones muy estrictas. El backend te manda todo el registro de transferencias internacionales mezclado.

interface Transferencia {
  id: string;
  cliente: string;
  membresia: 'VIP' | 'Regular' | 'Pro';
  estado: 'Completada' | 'Pendiente' | 'Fallida';
  montoBase: number;
  comisionCobrada: number;
}

const transferenciasDelDia: Transferencia[] = [
  { id: 'TRX-01', cliente: 'Zack99', membresia: 'VIP', estado: 'Completada', montoBase: 1000, comisionCobrada: 50 },
  { id: 'TRX-02', cliente: 'Beto', membresia: 'Regular', estado: 'Completada', montoBase: 200, comisionCobrada: 10 },
  { id: 'TRX-03', cliente: 'Ana', membresia: 'VIP', estado: 'Fallida', montoBase: 5000, comisionCobrada: 250 },
  { id: 'TRX-04', cliente: 'Carlos', membresia: 'Pro', estado: 'Pendiente', montoBase: 300, comisionCobrada: 15 },
  { id: 'TRX-05', cliente: 'Elena', membresia: 'VIP', estado: 'Completada', montoBase: 8000, comisionCobrada: 400 },
  { id: 'TRX-06', cliente: 'Diana', membresia: 'VIP', estado: 'Completada', montoBase: 1500, comisionCobrada: 75 }
];

function calcularGananciaReal(transferencias: Transferencia[]) {

    return transferencias 
    .filter(usuario => usuario.membresia === 'VIP' && usuario.estado === 'Completada')
    .reduce((total, transferencia) => total + transferencia.comisionCobrada, 0)

}

console.log('Ganancia real del día:', calcularGananciaReal(transferenciasDelDia))