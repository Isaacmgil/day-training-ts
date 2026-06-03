//Vamos a explorar un nuevo departamento del servidor público. Esta vez, gestionaremos catálogos musicales.

interface Album {
    userId: number;
    id: number;
    title: string;
}

async function traerAlbums() {
    try {
        console.log("1. Conectando al servidor de música...");
        const resultados = await fetch('https://jsonplaceholder.typicode.com/albums');
        const data = await resultados.json() as Album[]; 
        const albumesUsuario5 = data.filter(album => album.userId === 5);
        const cantidadAlbumes = albumesUsuario5.length; 
        console.log(`Reporte: El usuario 5 tiene exactamente ${cantidadAlbumes} álbumes registrados.`)
    } catch (error) {
        console.log('Error en la descarga de albumes...intente de nuevo', error); 
    } finally {
        console.log("3. Conexión cerrada."); 
    }
}

traerAlbums(); 