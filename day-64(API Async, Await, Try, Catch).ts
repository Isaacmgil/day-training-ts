interface UsuarioRemoto {
    name: string;
    email: string;
    website: string;
}

async function descargarUsuario() {
    try {
        console.log("Iniciando conexión con el servidor remoto...");
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const datos = await respuesta.json() as UsuarioRemoto;
        console.log(`✅ Datos extraídos de internet:
                    Nombre: ${datos.name}
                    Email: ${datos.email}
                    Website: ${datos.website}`)
    } catch (error) {
        console.error("Error al descargar el usuario:", error);
    } finally {
        console.log("Proceso de descarga finalizado.");
    }
}

descargarUsuario();