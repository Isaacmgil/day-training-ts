//En MoneyPal, los usuarios se están quejando de que no saben en qué se les va el dinero de los pagos automáticos. El equipo de producto quiere que construyas una función para el dashboard principal que le muestre al usuario un resumen limpio de sus suscripciones activas.

interface Gasto {
  id: string;
  descripcion: string;
  monto: number;
  categoria: 'Suscripcion' | 'Comida' | 'Servicios' | 'Ocio';
  pagadoAutomatico: boolean;
}

const historialGastos: Gasto[] = [
  { id: 'G-01', descripcion: 'Netflix', monto: 15, categoria: 'Suscripcion', pagadoAutomatico: true },
  { id: 'G-02', descripcion: 'Hamburguesas', monto: 25, categoria: 'Comida', pagadoAutomatico: false },
  { id: 'G-03', descripcion: 'Luz Eléctrica', monto: 40, categoria: 'Servicios', pagadoAutomatico: true },
  { id: 'G-04', descripcion: 'Spotify Premium', monto: 10, categoria: 'Suscripcion', pagadoAutomatico: true },
  { id: 'G-05', descripcion: 'Gimnasio', monto: 30, categoria: 'Suscripcion', pagadoAutomatico: false },
  { id: 'G-06', descripcion: 'Amazon Prime', monto: 9, categoria: 'Suscripcion', pagadoAutomatico: true }
];

function obtenerResumenSuscripciones(gastos: Gasto[]) {

    return gastos
    .filter(gasto => gasto.categoria === 'Suscripcion' && gasto.pagadoAutomatico)
    .map(gasto => {
        return {
            descripcion: gasto.descripcion, 
            monto: gasto.monto,
        }
    })
    .sort((a, b) => b.monto - a.monto)

}

console.log(obtenerResumenSuscripciones(historialGastos)); 