//Hacer una petición PUT es, literalmente, combinar lo que aprendiste en los dos últimos días (POST y DELETE).

//Volviendo a nuestra analogía de la empresa de envíos: Imagina que ayer enviaste la caja número 1, pero te diste cuenta de que el artículo adentro tenía un error ortográfico. No quieres borrar la caja y crear la número 102, quieres reemplazar el contenido de la caja número 1.

interface ArticuloActualizado {
    id: number;
    title: string;
    body: string;
    userId: number;
}

async function editarPublicacion(id: number, datosNuevos: ArticuloActualizado) {

    try {
        console.log(`1. Solicitando actualización para el artículo ${id}...`)
        const respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(datosNuevos)
        });
        const datosConfirmados = await respuesta.json(); 
        console.log(`2. ¡Actualización exitosa! El nuevo título es: ${datosConfirmados.title}`)
    } catch (error) {
        console.log(`Error: No se pudo actualizar el registro.`)
    } finally {
        console.log(`3. Editor cerrado.`); 
    }


}

const correccion: ArticuloActualizado = {
    id: 1,
    title: "TÍTULO CORREGIDO: Las maravillas de TypeScript",
    body: "El contenido ha sido reescrito por completo con nueva información...",
    userId: 1
};

editarPublicacion(1, correccion);