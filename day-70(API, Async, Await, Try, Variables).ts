// --- CAJA NEGRA: SERVIDOR CAÍDO ---
function simularPeticionInestable() {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            reject("Error 500: El servidor base de datos no responde.");
        }, 2000);
    });
}
// ----------------------------------

let UI_cargando = false;
let UI_errorVisual = "";
let UI_datosPantalla = "";

function pintarPantalla() {
    if (UI_cargando) {
        console.log(`⏳ [Spinner girando] Por favor espera...`)
    } else if (UI_errorVisual != "") {
        console.log(`🟥 [ALERTA ROJA EN PANTALLA]: ` + UI_errorVisual)
    } else {
        console.log(`🟩 [TARJETA VERDE]: ` + UI_datosPantalla)
    }
    console.log("-----------------------------");
}

async function obtenerInformacionUsuario() {
    UI_cargando = true;
    UI_errorVisual = "";
    pintarPantalla();
    try {
        UI_datosPantalla = await simularPeticionInestable(); 
    } catch (error) {
        UI_errorVisual = `¡Ups! Revisa tu conexión a internet y vuelve a intentarlo.`; 
    } finally {
        UI_cargando = false; 
        pintarPantalla(); 
    }
}

obtenerInformacionUsuario(); 

//////////////////////////////////////////////////

// export class PerfilComponent {
//   // 1. El estado (La memoria)
//   cargando = false;
//   errorVisual = "";
//   datosPantalla = "";

//   // 2. La función conectada al botón de la interfaz
//   async obtenerInformacion() {
//     this.cargando = true;       // El motor lo ve y enciende el spinner en el HTML
//     this.errorVisual = "";      // El motor lo ve y oculta la alerta roja

//     try {
//       this.datosPantalla = await peticionAlServidor(); // El motor lo ve y pinta los datos
//     } catch (error) {
//       this.errorVisual = "¡Ups! Revisa tu conexión.";  // El motor lo ve y pinta el error
//     } finally {
//       this.cargando = false;    // El motor lo ve y apaga el spinner
//     }
//   }
// }