interface Tarea {
    id: number;
    title: string;
    completed: boolean; 
}

async function tareasCompletadas() {
    try {
        console.log("1. Conectando al servidor de tareas...")
        const resultado = await fetch("https://jsonplaceholder.typicode.com/todos")
        const datos = await resultado.json() as Tarea[]
        let tareasCompletadas = 0
        datos.forEach((tarea) => {
            if(tarea.completed){
                tareasCompletadas += 1;
            }
        })
        console.log(`2. Reporte: Se encontraron ${tareasCompletadas} tareas completadas en total.`)
    } catch (error) {
        console.log(`La descarga de datos falló, intenta de nuevo` , error);
    } finally {
        console.log("3. Conexión cerrada. Memoria liberada.")
    }
}

tareasCompletadas(); 