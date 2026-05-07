//El backend nos acaba de enviar la información cruda del carrito de compras del usuario. Tu misión es procesar estos datos en un solo tubo de datos (pipeline) para que la interfaz de usuario de Angular pueda pintarlos.
//Los artículos que NO están en stock no deben cobrarse ni mostrarse.

//La pantalla solo necesita saber el nombre del artículo y el totalGasto (que es la multiplicación del precio unitario por la cantidad).

//Los artículos deben mostrarse ordenados del gasto total más alto al más bajo.

interface ArticuloCarrito {
  id: string;
  nombre: string;
  precioUnitario: number;
  cantidad: number;
  enStock: boolean;
}

const carritoCrudo: ArticuloCarrito[] = [
  { id: 'A1', nombre: 'Teclado Mecánico', precioUnitario: 100, cantidad: 2, enStock: true },
  { id: 'A2', nombre: 'Mousepad', precioUnitario: 15, cantidad: 1, enStock: false },
  { id: 'A3', nombre: 'Monitor 27"', precioUnitario: 300, cantidad: 1, enStock: true },
  { id: 'A4', nombre: 'Cable HDMI', precioUnitario: 10, cantidad: 3, enStock: true },
  { id: 'A5', nombre: 'Silla Gamer', precioUnitario: 250, cantidad: 1, enStock: false }
];

function procesarCarrito(carrito: ArticuloCarrito[]) {

    return carrito
    .filter(carrito => carrito.enStock)
    .map(carrito => {
        return {
            nombre: carrito.nombre,
            totalGasto: carrito.precioUnitario * carrito.cantidad, 
        }
    })
    .sort((a, b) => b.totalGasto - a.totalGasto)


}

console.log(procesarCarrito(carritoCrudo))