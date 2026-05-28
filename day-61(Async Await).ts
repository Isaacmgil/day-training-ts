// // --- CAJA NEGRA: SIMULADOR DE BASE DE DATOS ---
// function simularDescargaDeServidor() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("✅ Datos del usuario descargados con éxito");
//         }, 3000); // 3000 milisegundos = 3 segundos
//     });
// }
// // ----------------------------------------------


// async function iniciarSistema(){
//     console.log("1. Conectando al servidor...");
//     const resultado = await simularDescargaDeServidor(); 
//     console.log(resultado)
//     console.log("3. Sistema listo para usarse.");
// }

// iniciarSistema()


/////////////////////////////////////////////////////////////////////////////////////////


function obtenerNombreUsuario() {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve("Isaac");
        }, 2000); // Tarda 2 segundos
    });
}

function obtenerSaldoBancario() {
    return new Promise<number>((resolve) => {
        setTimeout(() => {
            resolve(1500);
        }, 3000); // Tarda 3 segundos
    });
}

async function cargarDashboard(){
    console.log(`Cargando interfaz...`); 
    const username = await obtenerNombreUsuario(); 
    console.log("Usuario encontrado. Descargando datos financieros...")
    let saldoBancario = await obtenerSaldoBancario(); 
    const saldoNeto = saldoBancario - 15; 
    console.log(`Bienvenido ${username}, tu saldo neto en tu cuenta es de ${saldoNeto}`);  
}

cargarDashboard()