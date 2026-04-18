//Te han transferido temporalmente al equipo de Auditoría Interna. Tienes un registro de las últimas transacciones del servidor, y hay que hacer una limpieza y análisis urgente.
//🕵️‍♂️ Misión 1: El Detective (Búsqueda de Texto)
//El equipo de contabilidad quiere saber cuánto estamos procesando en pagos de servicios básicos.

//Tu objetivo: Crea una constante que contenga una lista filtrada con todas las transacciones cuya descripción incluya la palabra "servicio" (Aplica tu nueva mejora de arma aquí para que no importe si está en mayúsculas o minúsculas).
//Prueba: Imprime esa lista en consola (Deberían aparecer solo las transacciones TX-01 y TX-04).

//💰 Misión 2: El Gran Total (Encadenamiento)
//Zack99 ha estado muy activo y el banco quiere saber exactamente cuánto dinero ha ingresado a su cuenta hoy.

//Tu objetivo: Calcula la suma total de dinero usando .reduce(), pero ojo: solo debes sumar las transacciones que pertenezcan al usuario 'Zack99' Y que sean de tipo 'Ingreso'. (Pista: Combina el guardia de la discoteca y la alcancía).
//Prueba: Imprime el resultado numérico en consola. (El resultado debe ser 200, ya que su otra transacción es un gasto).

//🚨 Misión 3: Congelamiento de Fondos (Modificación)
//El departamento legal confirmó que la transacción de Hackerman (ID: 'TX-02') es ilegal y debe ser anulada, pero no podemos borrarla del historial por temas de auditoría.

//Tu objetivo: Encuentra la posición exacta de esa transacción en el array original. Una vez encontrada, haz que su monto sea igual a 0, y cambia su tipo a 'Gasto'.
//Prueba: Imprime todo el registroTransacciones al final para demostrar que Hackerman se quedó con $0 en esa transacción.

interface Transaccion {
  id: string;
  usuario: string;
  monto: number;
  descripcion: string;
  tipo: 'Ingreso' | 'Gasto';
}

const registroTransacciones: Transaccion[] = [
  { id: 'TX-01', usuario: 'Zack99', monto: 120, descripcion: 'Pago de SERVICIO electrico', tipo: 'Gasto' },
  { id: 'TX-02', usuario: 'Hackerman', monto: 5000, descripcion: 'transferencia recibida misteriosa', tipo: 'Ingreso' },
  { id: 'TX-03', usuario: 'Andrea', monto: 15, descripcion: 'Suscripción de Spotify', tipo: 'Gasto' },
  { id: 'TX-04', usuario: 'Beto', monto: 800, descripcion: 'pago de servicio de internet', tipo: 'Gasto' },
  { id: 'TX-05', usuario: 'Zack99', monto: 200, descripcion: 'Devolución de Amazon', tipo: 'Ingreso' }
];

const listaFiltrada = registroTransacciones.filter(transaccion => transaccion.descripcion.toLowerCase().includes('servicio'));
console.log(`Lista de servicios: `, listaFiltrada);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

function calcularDinero(transacciones: Transaccion[]): number {

    const propiedadesImportantes = transacciones.filter(transaccion => transaccion.usuario === 'Zack99' && transaccion.tipo === 'Ingreso')
    const ingresosSumados = propiedadesImportantes.reduce((total, ingresos) => total + ingresos.monto, 0)
    return ingresosSumados

}

const mensajeIngresos = calcularDinero(registroTransacciones)
console.log(` Ingresos total del usuario:`,mensajeIngresos)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const indexTransaccion = registroTransacciones.findIndex(transaccion => transaccion.id === 'TX-02'); 
registroTransacciones[indexTransaccion]!.monto = 0; 
registroTransacciones[indexTransaccion]!.tipo = 'Gasto'; 
console.log(`Lista actualizada de transacciones: `,registroTransacciones)