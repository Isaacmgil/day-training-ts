//El CEO de MoneyPal necesita un reporte financiero detallado. Quiere saber exactamente cuánto dinero está metiendo y sacando cada departamento de la empresa.

//Tenemos la lista de movimientos cruda que nos mandó el servidor. Tu misión es armar la estructura anidada.

interface Movimiento {
  id: string;
  departamento: string;
  tipo: 'Ingreso' | 'Gasto';
  monto: number;
}

const auditoriaMensual: Movimiento[] = [
  { id: 'M-01', departamento: 'Ventas', tipo: 'Ingreso', monto: 5000 },
  { id: 'M-02', departamento: 'Tecnologia', tipo: 'Gasto', monto: 1500 },
  { id: 'M-03', departamento: 'Ventas', tipo: 'Gasto', monto: 300 },
  { id: 'M-04', departamento: 'Tecnologia', tipo: 'Gasto', monto: 200 },
  { id: 'M-05', departamento: 'Ventas', tipo: 'Ingreso', monto: 1200 },
  { id: 'M-06', departamento: 'RRHH', tipo: 'Gasto', monto: 800 }
];

function generarReporteFinanciero(movimientos: Movimiento[]){

    return movimientos.reduce((archivero: Record<string, Record<string, number>>, movimiento) => {
        const departamento = movimiento.departamento
        if(!archivero[departamento]){
            archivero[departamento] = {}
        }

        const movimientoTipo = movimiento.tipo
        if(!archivero[departamento][movimientoTipo]){
            archivero[departamento][movimientoTipo] = 0
        }

        archivero[departamento][movimientoTipo] += movimiento.monto


        return archivero

    }, {})

}

console.log(generarReporteFinanciero(auditoriaMensual))