//El equipo de marketing necesita automatizar la publicación de anuncios en el blog de la comunidad. Vamos a crear un script que envíe un artículo nuevo al servidor.

interface NuevaPublicacion {
    title: string;
    body: string;
    userId: number;
}

async function publicarAnuncio(nuevoArticulo: NuevaPublicacion) {

    try {
        console.log(`1. Empacando datos y contactando al servidor...`);
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(nuevoArticulo)
        });
        const datosGuardados = await respuesta.json(); 
        console.log(`2. ¡Éxito! El servidor guardó el artículo y le asignó el ID: ${datosGuardados.id}`)
    } catch (error) {
        console.log(`Error de conexión al intentar publicar.`);
    } finally {
        console.log(`3. Canal de transmisión cerrado.`); 
    }


}

const miAnuncio: NuevaPublicacion = {
    title: "¡Gran inauguración de la sección de Ciencia Ficción!",
    body: "Descubre los nuevos títulos que tenemos disponibles para ti esta semana.",
    userId: 1
};

publicarAnuncio(miAnuncio);