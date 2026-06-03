interface Cliente {
    name: string;
    email: string;
}

async function buscarCliente(termino: string) {
    try {
        console.log(`1. Iniciando búsqueda del cliente: ${termino}...`)
        const resultado = await fetch('https://jsonplaceholder.typicode.com/users'); 
        const data = await resultado.json() as Cliente[]; 
        const clientesEncontrados = data.filter(cliente => cliente.name.toLowerCase().includes(termino.toLowerCase())); 
        console.log(`2. Se encontraron ${clientesEncontrados.length} coincidencias:`);
        clientesEncontrados.forEach((cliente) => {
            console.log(`- ${cliente.name} (${cliente.email})`)
        })

    } catch (error) {
        console.log(`Error de conexión.`)
    } finally {
        console.log(`3. Búsqueda finalizada.`)
    }

}

buscarCliente('clement'); 
