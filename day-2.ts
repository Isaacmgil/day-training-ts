interface Gasto {
  id: number;
  descripcion: string;
  categoria: 'suscripcion' | 'comida' | 'transporte' | 'ocio';
  monto: number;
  estado: 'pagado' | 'pendiente';
}

const gastosDelMes: Gasto[] = [
  { id: 1, descripcion: 'Netflix', categoria: 'suscripcion', monto: 15, estado: 'pagado' },
  { id: 2, descripcion: 'Spotify', categoria: 'suscripcion', monto: 10, estado: 'pendiente' },
  { id: 3, descripcion: 'Mercado', categoria: 'comida', monto: 150, estado: 'pagado' },
  { id: 4, descripcion: 'Gimnasio', categoria: 'suscripcion', monto: 30, estado: 'pendiente' },
  { id: 5, descripcion: 'Uber', categoria: 'transporte', monto: 25, estado: 'pagado' },
  { id: 6, descripcion: 'AWS (Hosting)', categoria: 'suscripcion', monto: 45, estado: 'pendiente' }
];

const subscripciones = ['suscripcion']
const estado = ['pendiente']

function calcularDeudaSuscripciones(gastos: Gasto[]): number {
  
  return gastos
  .filter(gasto => subscripciones.includes(gasto.categoria) && estado.includes(gasto.estado))
  .reduce((total, gasto) => total + (gasto.monto), 0); 
}

/////////////////////////////////////////////////////////////////////////////////////////////

function calcularDeudasSuscripcionesSenior(gastos: Gasto[]): number {
  
  // EL CAMINO SENIOR: Method Chaining (Encadenamiento)
  // Retornamos directamente el resultado final de toda la tubería de datos.
  return gastos
  
    // 1. EL FILTRO (El Guardia de Seguridad Doble)
    // Recorremos la caja 'gastos'. A cada elemento lo llamamos 'gasto'.
    .filter(gasto => {
      // Exigimos DOS cosas al mismo tiempo usando el operador && (AND).
      // ¿Es la categoría exactamente 'suscripcion' Y su estado es exactamente 'pendiente'?
      // Solo si AMBAS son verdaderas (true), el gasto sobrevive y pasa a la siguiente fase.
      return gasto.categoria === 'suscripcion' && gasto.estado === 'pendiente';
    })
    
    // 2. LA CALCULADORA (El Reduce)
    // El reduce recibe automáticamente la lista filtrada del paso anterior.
    // 'total' es nuestra alcancía. 'gasto' es el elemento sobreviviente de esta vuelta.
    .reduce((total, gasto) => {
      // Tomamos lo que ya tiene la alcancía y le sumamos el monto de este gasto específico.
      return total + gasto.monto;
    }, 0); // La alcancía empieza en 0.
}

console.log("Deuda total de suscripciones pendientes:", calcularDeudaSuscripciones(gastosDelMes));
console.log("Deuda total de suscripciones pendientes:", calcularDeudasSuscripcionesSenior(gastosDelMes));

