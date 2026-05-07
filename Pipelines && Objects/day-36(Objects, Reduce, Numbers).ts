//En el panel de control de la aplicación, queremos mostrar un gráfico de torta (pie chart) para que el usuario vea exactamente en qué se le fue el dinero este mes. El componente del gráfico no necesita saber el ID ni los detalles de cada transacción, solo necesita saber el total de dinero gastado por cada categoría.

//El backend nos manda la lista de gastos plana. Tu trabajo es construir un archivero donde cada categoría tenga su propio total acumulado.

interface Gasto {
  id: string;
  categoria: string;
  monto: number;
}

const gastosDelMes: Gasto[] = [
  { id: 'G-01', categoria: 'Comida', monto: 45 },
  { id: 'G-02', categoria: 'Transporte', monto: 15 },
  { id: 'G-03', categoria: 'Comida', monto: 30 },
  { id: 'G-04', categoria: 'Entretenimiento', monto: 50 },
  { id: 'G-05', categoria: 'Transporte', monto: 20 }
];

function calcularDineroAcumulado(gastos: Gasto[]){

    return gastos.reduce((archivero: Record<string, number>, gastoActual) => {
        const gastoCategoria = gastoActual.categoria;
        if(!archivero[gastoCategoria]){
            archivero[gastoCategoria] = 0
        }
        
        archivero[gastoCategoria] = archivero[gastoCategoria] + gastoActual.monto 

        return archivero


    }, {})


}

console.log(calcularDineroAcumulado(gastosDelMes)); 