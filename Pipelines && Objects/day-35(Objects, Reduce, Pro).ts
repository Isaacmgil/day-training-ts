//El equipo de finanzas de MoneyPal necesita una vista en la aplicación donde el usuario pueda ver su historial dividido en dos grandes bloques: el dinero que entró y el dinero que salió.

//El backend nos está enviando todas las transacciones mezcladas en una sola lista plana. Tu misión es construir el archivero y separar estas transacciones automáticamente usando su propiedad tipo.

interface Transaccion {
  id: string;
  tipo: string; 
  monto: number;
  concepto: string;
}

const historialMensual: Transaccion[] = [
  { id: 'TRX-01', tipo: 'Ingreso', monto: 5000, concepto: 'Salario base' },
  { id: 'TRX-02', tipo: 'Gasto', monto: 120, concepto: 'Suscripción de software' },
  { id: 'TRX-03', tipo: 'Ingreso', monto: 850, concepto: 'Bono por proyecto' },
  { id: 'TRX-04', tipo: 'Gasto', monto: 45, concepto: 'Cafetería' },
  { id: 'TRX-05', tipo: 'Gasto', monto: 600, concepto: 'Alquiler de servidor' }
];

function separarTransacciones(transacciones: Transaccion[]) {

    return transacciones.reduce((archivero: Record<string, { concepto: string, monto: number }[]>, transaccion) => {

        const tipoTransaccion = transaccion.tipo; 
        if(!archivero[tipoTransaccion]){
            archivero[tipoTransaccion] = []
        }
    
        archivero[tipoTransaccion].push({
            concepto: transaccion.concepto, 
            monto: transaccion.monto

        })

        return archivero


    }, {})

}

console.log(separarTransacciones(historialMensual))