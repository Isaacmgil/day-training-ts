//Misión 1: El Auditor de Almacén (Encadenamiento)
//El gerente de tecnología te pregunta: "Isaac, ¿Absolutamente todos los productos de la categoría 'Tecnologia' tienen stock disponible (mayor a 0)?"
//Objetivo: Crea una constante y responde con un Booleano (true o false). ¡Aplica lo que acabamos de aprender del salón de clases!

//Misión 2: La Compra (Búsqueda y Modificación)
//Un usuario acaba de comprar la "Taza "No hay bugs"" (ID: 'P-03').
//Objetivo: Encuentra en qué posición del array original está ese producto, y réstale 1 a su stock actual.
//Prueba: Imprime el inventario completo para demostrar que la taza ahora tiene 29 en stock.

//Misión 3: El Catálogo Público (Transformación y Orden)
//La página web necesita mostrar los productos, pero no quieren mostrar el stock ni el ID. Además, quieren que los más baratos salgan primero.
//Objetivo: Crea una función que devuelva un nuevo array ordenado de Menor a Mayor precio, mostrando SOLAMENTE el nombre, la categoria y el precio.


interface Producto {
  id: string;
  nombre: string;
  categoria: 'Ropa' | 'Tecnologia' | 'Accesorios';
  precio: number;
  stock: number;
}

const inventario: Producto[] = [
  { id: 'P-01', nombre: 'Camiseta Hacker', categoria: 'Ropa', precio: 25, stock: 10 },
  { id: 'P-02', nombre: 'Teclado Mecánico', categoria: 'Tecnologia', precio: 120, stock: 0 },
  { id: 'P-03', nombre: 'Taza "No hay bugs"', categoria: 'Accesorios', precio: 15, stock: 30 },
  { id: 'P-04', nombre: 'Monitor UltraWide', categoria: 'Tecnologia', precio: 300, stock: 5 },
  { id: 'P-05', nombre: 'Gorra MoneyPal', categoria: 'Ropa', precio: 20, stock: 0 }
];

    const stockTecnologia = inventario.filter(producto => producto.categoria === 'Tecnologia').every(stock => stock.stock > 0)
    console.log(`¿Absolutamente todos los productos de la categoría 'Tecnologia' tienen stock disponible?: ${stockTecnologia}`)

    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    const posicionProducto = inventario.findIndex(producto => producto.id === 'P-03')
    if(posicionProducto === -1){
         `❌ Error: El producto con el id ${posicionProducto} no existe en la lista de investigación.`
    }else {
        inventario[posicionProducto]!.stock--; 
        console.log(`🚨 El stock ha sido actualizado!`)
    }
    
    console.log(inventario)

    ///////////////////////////////////////////////////////////////////////////////////////////////////////// 

    function ordenarCatalogo(productos: Producto[]) { 

        const catalogoRequerido = productos.map(producto => {
            return { 
                nombre: producto.nombre,
                categoria: producto.categoria, 
                precio: producto.precio
            }
        });

        const catalogoRequeridoClon = [...catalogoRequerido]
        const catalogoOrdenado = catalogoRequeridoClon.sort((a, b) => a.precio - b.precio)
        return catalogoOrdenado

    }

    console.log('Catálogo ordenado por precio de menor a mayor!'); 
    console.log(ordenarCatalogo(inventario)); 