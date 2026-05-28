// --- CAJA NEGRA: PROCESADOR DE PAGOS ---
function procesarPago(monto: number) {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            if (monto > 1000) {
                // Si el monto es muy alto, simulamos un fallo del banco
                reject("❌ Error del servidor: Fondos insuficientes o límite excedido.");
            } else {
                // Si es menor a 1000, todo sale bien
                resolve("✅ Pago procesado exitosamente.");
            }
        }, 2000);
    });
}
// ---------------------------------------

async function realizarTransferencia(monto: number) {
    try {
        console.log("1. Iniciando conexión con el banco...")
        const resultado = await procesarPago(monto);   // Zona de riesgo
        console.log(resultado);
    } catch (error) {
        console.log("Lo sentimos, la transacción falló."); // Ambulancia
        console.log(error); // Imprime el error real directamente
    }

    console.log("Operación finalizada. Volviendo al menú principal.")
}

realizarTransferencia(500)