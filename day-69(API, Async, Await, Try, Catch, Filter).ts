interface Articulo {
    id: number; 
    title: string; 
}

async function buscarArticulo(palabraClave: string) {

    try {
        console.log(`1. Buscando artículos que contengan: '${palabraClave}'...`); 
        const resultados = await fetch(`https://jsonplaceholder.typicode.com/posts`); 
        const data = await resultados.json() as Articulo[]; 
        const articuloEncontrado = data.filter(articulo => articulo.title.toLowerCase().includes(palabraClave.toLowerCase()))
        if(articuloEncontrado.length === 0){
            console.log(`⚠️ No se encontraron artículos con esa palabra. Intenta con otra búsqueda.`); 
        } else {
            console.log(`✅ Se encontraron ${articuloEncontrado.length} artículos:`)
            articuloEncontrado.forEach((articulo) => {
                console.log(`- ${articulo.id} ${articulo.title}`)
            });
        }
    } catch (error) {
        console.log(`Error de red.`); 
    } finally {
        console.log(`3. Motor de búsqueda en reposo.`); 
    }
}

//buscarArticulo("optio"); // Esta palabra sí existe en la base de datos 
buscarArticulo("criptomonedas"); // Esta palabra no existe