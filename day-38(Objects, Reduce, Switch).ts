//MoneyPal acaba de lanzar su programa de recompensas "MoneyPoints". Los usuarios ganan o pierden puntos dependiendo del tipo de actividad que realicen en la aplicación.

//El equipo de backend nos ha enviado el registro de actividades del día. Tu misión es calcular el saldo final de puntos para cada usuario.

interface ActividadPuntos {
  alias: string;
  accion: 'Aprobada' | 'Premium' | 'Devolucion' | 'Inactividad' | 'Fraude' | 'Rechazada';
  puntos: number;
}

const registrosHoy: ActividadPuntos[] = [
  { alias: 'SniperWolf', accion: 'Aprobada', puntos: 100 },
  { alias: 'GoldenBoy', accion: 'Premium', puntos: 200 }, 
  { alias: 'SniperWolf', accion: 'Devolucion', puntos: 50 },
  { alias: 'BearHunter', accion: 'Fraude', puntos: 500 }, 
  { alias: 'PipMaster', accion: 'Aprobada', puntos: 300 },
  { alias: 'GoldenBoy', accion: 'Inactividad', puntos: 0 }, 
  { alias: 'PipMaster', accion: 'Rechazada', puntos: 100 }, 
];

function calcularPuntosUsuarios(registros: ActividadPuntos[]){

    return registros.reduce((archivero: Record<string, number>, registro) => {

        const alias = registro.alias 
        if(!archivero[alias]){
            archivero[alias] = 0 
        }

        const accion = registro.accion

        switch (accion){
            case 'Aprobada': 
            archivero[alias] += registro.puntos  //Suma los puntos exactos que trae la actividad al archivero del usuario.
            break; 

            case 'Premium': 
            archivero[alias] += registro.puntos * 2 //Esta transacción es especial. Suma el doble de los puntos que trae la actividad
            break; 

            case 'Devolucion': 
            archivero[alias] -= registro.puntos //Resta los puntos exactos que trae la actividad.
            break; 

            case 'Inactividad': 
            archivero[alias] = archivero[alias] - 50 //El sistema castiga por no usar la app. Resta exactamente 50 puntos fijos (ignora por completo lo que traiga la propiedad puntos).
            break; 

            case 'Fraude': 
            archivero[alias] = 0
            break; 

            default: 
            archivero[alias] 
            break;
        }

        return archivero
        
    }, {})

}

console.log(calcularPuntosUsuarios(registrosHoy)); 