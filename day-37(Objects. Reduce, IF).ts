//MoneyPal acaba de abrir sucursales físicas. Al final del día, el sistema central recibe una lista con todas las transacciones que ocurrieron en todas las sedes.

//El departamento de Contabilidad necesita saber el Ingreso Neto de cada sucursal. El problema es que en la lista vienen ventas exitosas, ventas que fueron rechazadas por el banco, y devoluciones (reembolsos).

interface Venta {
  ticket: string;
  sucursal: string;
  monto: number;
  estado: 'Pagada' | 'Rechazada' | 'Reembolsada';
}

const transaccionesHoy: Venta[] = [
  { ticket: 'T-01', sucursal: 'Centro', monto: 100, estado: 'Pagada' },
  { ticket: 'T-02', sucursal: 'Norte', monto: 50, estado: 'Pagada' },
  { ticket: 'T-03', sucursal: 'Centro', monto: 20, estado: 'Reembolsada' },
  { ticket: 'T-04', sucursal: 'Sur', monto: 200, estado: 'Rechazada' },
  { ticket: 'T-05', sucursal: 'Centro', monto: 80, estado: 'Pagada' },
  { ticket: 'T-06', sucursal: 'Norte', monto: 30, estado: 'Reembolsada' }
];

function calcularIngresoSucursales(transacciones: Venta[]){

    return transacciones.reduce((archivero: Record<string, number>, transaccion) => {

        const sucursal = transaccion.sucursal
        if(!archivero[sucursal]){
            archivero[sucursal] = 0
        }

        if(transaccion.estado === 'Pagada'){
            archivero[sucursal] += transaccion.monto
        }else if(transaccion.estado === 'Reembolsada'){
            archivero[sucursal] -= transaccion.monto
        }

        return archivero

    }, {})

}

console.log(calcularIngresoSucursales(transaccionesHoy)); 