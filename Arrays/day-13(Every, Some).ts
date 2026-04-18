//MoneyPal va a lanzar una función para dar microcréditos a sus usuarios. Cuando un usuario solicita el crédito, envía un expediente con varios documentos.

//Tu misión: Crear el sistema automático que escanea el expediente. Para que el préstamo sea aprobado, todos los documentos deben estar entregados, y ningún documento debe tener alertas de fraude.

interface Documento {
  tipo: string;
  entregado: boolean;
  alertaFraude: boolean;
}

// Expediente de prueba de un cliente sospechoso
const expedienteCliente: Documento[] = [
  { tipo: 'Identidad', entregado: true, alertaFraude: false },
  { tipo: 'Comprobante de Ingresos', entregado: true, alertaFraude: false },
  { tipo: 'Historial Crediticio', entregado: false, alertaFraude: false }, // 🚨 Falta entregar
  { tipo: 'Recibo de Luz', entregado: true, alertaFraude: true }           // 🚨 Documento alterado
];

function evaluarCredito(expediente: Documento[]): string {

    const documentoCompleto = expediente.every(documento => documento.entregado)
    const peligroFraude = expediente.some(documento => documento.alertaFraude)

    if(peligroFraude === true) {
        return `❌ Préstamo Denegado: Se detectó posible fraude en los documentos.`
    } else if (documentoCompleto === false) {
        return `⚠️ Préstamo en Espera: Faltan documentos por entregar.`
    } else {
        return `✅ ¡Felicidades! Préstamo aprobado y listo para desembolso.`
    }

}

console.log(evaluarCredito(expedienteCliente));