//El equipo de moderación ha detectado un artículo en el blog que rompe las reglas de la comunidad. Tu misión es construir el botón rojo de emergencia para borrar publicaciones.

async function eliminarPublicacion(id: number) {

    try {
        console.log(`1. Apuntando al artículo ${id} y solicitando eliminación...`)
        const respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE'
        });
        const data = await respuesta.json();
        console.log(`2. ¡Operación exitosa! El servidor ha devuelto:`, data)
    } catch (error) {
        console.log(`Error crítico: No se pudo contactar al servidor para la eliminación.`)
    } finally {
        console.log(`3. Protocolo de moderación finalizado.`);
    }
}

eliminarPublicacion(42); 