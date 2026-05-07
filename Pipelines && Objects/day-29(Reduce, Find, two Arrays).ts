//El equipo de inversiones de MoneyPal está construyendo un panel para los usuarios que operan en los mercados financieros. Necesitamos calcular la ganancia (o pérdida) flotante total de un usuario que tiene varias operaciones abiertas.

//El problema es que el backend nos manda las posiciones del usuario por un lado, y los precios en vivo del mercado por otro. Tu trabajo es cruzar ambas listas y aplastarlas en un solo número global.

interface Posicion {
  idOperacion: string;
  simbolo: string;
  lotes: number;
}

interface Mercado {
  simbolo: string;
  precioActual: number;
  gananciaPorLote: number; // Cuánto dinero está dando 1 lote entero en este momento
}

const operacionesAbiertas: Posicion[] = [
  { idOperacion: 'OP-01', simbolo: 'XAU/USD', lotes: 0.5 },
  { idOperacion: 'OP-02', simbolo: 'EUR/USD', lotes: 1 },
  { idOperacion: 'OP-03', simbolo: 'XAU/USD', lotes: 0.1 },
  { idOperacion: 'OP-04', simbolo: 'GBP/JPY', lotes: 2 } // ¡Peligro! El mercado no nos mandó datos de este par hoy
];

const mercadoEnVivo: Mercado[] = [
  { simbolo: 'XAU/USD', precioActual: 2350.50, gananciaPorLote: 1000 }, 
  { simbolo: 'EUR/USD', precioActual: 1.0850, gananciaPorLote: -200 }, 
  { simbolo: 'BTC/USD', precioActual: 62000, gananciaPorLote: 500 }
];

function calcularGananciaTotal(operaciones: Posicion[], mercado: Mercado[]){

   return operaciones
    .reduce((total, operacion) => {
    
    // 1. LA PAUSA (El Buscador):
    // Antes de sumar nada, le decimos al guardia que busque en la lista de 'mercado' 
    // el objeto cuyo símbolo coincida con el símbolo de la 'operacion' actual.
    const mercadoEncontrado = mercado.find(item => item.simbolo === operacion.simbolo);

    // 2. LA EVALUACIÓN (¿Existe en el mercado?):
    // Recuerda que el GBP/JPY no está en la lista del mercado de hoy.
    if (mercadoEncontrado !== undefined) {
        
        // 3. LA MATEMÁTICA: 
        // Si lo encontramos, calculamos cuánto dinero nos da esta operación 
        // (multiplicando los lotes por la gananciaPorLote) y se lo sumamos al total que ya traíamos.
        const gananciaDeEstaOperacion = operacion.lotes * mercadoEncontrado.gananciaPorLote;
        
        return total + gananciaDeEstaOperacion; // Actualizamos la licuadora

    } else {
        
        // Si el símbolo no estaba en el mercado, no podemos sumar nada nuevo.
        // Simplemente devolvemos el total que ya traíamos para que la licuadora no se rompa.
        return total; 
    }

}, 0); // <--- Este es el 0 inicial del 'total'. Va justo antes de cerrar el paréntesis del reduce.

}

console.log(calcularGananciaTotal(operacionesAbiertas, mercadoEnVivo))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//MoneyPal va a contratar freelancers. El backend nos manda una lista de las tareas que un programador hizo esta semana y las horas que le tomó. Por otro lado, tenemos el "Tarifario" que dice cuánto pagamos por hora según el tipo de tarea.
//Multiplica las horas de cada tarea por su precio por hora en el tarifario, y suma todo para saber de cuánto será el cheque del programador. Si la tarea no está en el tarifario, no suma dinero.

interface Tarea {
  id: string;
  tipo: string;
  horas: number;
}

interface Tarifa {
  tipo: string;
  precioPorHora: number;
}

const tareasRealizadas: Tarea[] = [
  { id: 'T1', tipo: 'Backend', horas: 10 },
  { id: 'T2', tipo: 'Frontend', horas: 5 },
  { id: 'T3', tipo: 'Reunion', horas: 2 }, // Peligro: Las reuniones no están en el tarifario, no se pagan.
  { id: 'T4', tipo: 'Backend', horas: 8 }
];

const tarifarioBase: Tarifa[] = [
  { tipo: 'Backend', precioPorHora: 30 },
  { tipo: 'Frontend', precioPorHora: 25 },
  { tipo: 'DevOps', precioPorHora: 40 }
];

function calcularCheque(tareas: Tarea[], tarifario: Tarifa[]){

    return tareas 
        .reduce((total, tarea) => {
            const tarifaEncontrada = tarifario.find(tarifa => tarifa.tipo === tarea.tipo)

            if(tarifaEncontrada !== undefined){
                const chequeCalculado = tarea.horas * tarifaEncontrada.precioPorHora
                return total + chequeCalculado
            }else{
                return total
            }


        }, 0)

}

console.log(calcularCheque(tareasRealizadas, tarifarioBase))