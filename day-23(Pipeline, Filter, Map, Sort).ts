//El equipo de Riesgos de MoneyPal está creando un nuevo panel para los analistas financieros. El backend envía una lista cruda de todas las solicitudes de préstamo del día. Tu trabajo es limpiar esa lista y prepararla para la interfaz visual.

interface Solicitud {
  id: string;
  solicitante: string;
  ingresoMensual: number;
  montoSolicitado: number;
  historialCrediticio: 'Excelente' | 'Bueno' | 'Malo';
}

const solicitudesCrudas: Solicitud[] = [
  { id: 'REQ-01', solicitante: 'Ana', ingresoMensual: 3000, montoSolicitado: 6000, historialCrediticio: 'Bueno' },
  { id: 'REQ-02', solicitante: 'Beto', ingresoMensual: 1500, montoSolicitado: 10000, historialCrediticio: 'Malo' },
  { id: 'REQ-03', solicitante: 'Carlos', ingresoMensual: 4000, montoSolicitado: 12000, historialCrediticio: 'Excelente' },
  { id: 'REQ-04', solicitante: 'Diana', ingresoMensual: 2000, montoSolicitado: 15000, historialCrediticio: 'Bueno' },
  { id: 'REQ-05', solicitante: 'Elena', ingresoMensual: 5000, montoSolicitado: 2000, historialCrediticio: 'Excelente' }
];

function procesarSolicitudes(solicitudes: Solicitud[]) {

    return solicitudes
    .filter(solicitud => solicitud.historialCrediticio !== 'Malo' && solicitud.montoSolicitado <= solicitud.ingresoMensual * 3)
    .map(solicitud => {
        return {
            solicitante: solicitud.solicitante, 
            cuotaMensual: solicitud.montoSolicitado / 10
        }
    })
    .sort((a, b) => a.cuotaMensual - b.cuotaMensual)

}

console.log(procesarSolicitudes(solicitudesCrudas)); 