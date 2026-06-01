interface Publicacion {
    userId: number;
    title: string;
    body: string;
}

async function traerPublicaciones() {
    try{
        console.log("1. Conectando al servidor de publicaciones...")
        const resultados = await fetch('https://jsonplaceholder.typicode.com/posts'); 
        const datos = await resultados.json() as Publicacion[]; 
        let publicacionesEncontradas = 0; 
        datos.forEach((publicacion) => {
            if(publicacion.userId === 2){
                publicacionesEncontradas += 1; 
            }
        }); 
        console.log(`2. Reporte: Se encontraron ${publicacionesEncontradas} publicaciones del usuario 2. `)
    } catch (error) {
        console.log(`Hubo un fallo en el servidor intenta de nuevo`, error)
    } finally {
        console.log("3. Conexión del servidor cerrada."); 
    }
}

traerPublicaciones(); 