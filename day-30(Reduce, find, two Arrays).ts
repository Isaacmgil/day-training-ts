//La cafetería corporativa de MoneyPal tiene un sistema automático donde los empleados piden desde sus mesas con una tablet. Al final, el sistema debe calcular la cuenta total de la mesa.

//Tenemos la lista de todo lo que pidió la Mesa 4, y tenemos el Menú del sistema con los precios actualizados. Tu misión es calcular cuánto deben pagar en total.

interface Pedido {
  idPedido: string;
  codigoPlato: string;
  cantidad: number;
}

interface PlatoMenu {
  codigo: string;
  nombre: string;
  precio: number;
  disponibleHoy: boolean;
}

const pedidosMesa4: Pedido[] = [
  { idPedido: 'P01', codigoPlato: 'PLA-01', cantidad: 2 },
  { idPedido: 'P02', codigoPlato: 'PLA-05', cantidad: 1 },
  { idPedido: 'P03', codigoPlato: 'PLA-99', cantidad: 3 }, // ¡Peligro! Plato fuera de menú (error del sistema)
  { idPedido: 'P04', codigoPlato: 'PLA-02', cantidad: 1 }  // ¡Peligro! El cliente lo pidió, pero la cocina lo marcó como agotado
];

const menuDelDia: PlatoMenu[] = [
  { codigo: 'PLA-01', nombre: 'Hamburguesa Doble', precio: 12, disponibleHoy: true },
  { codigo: 'PLA-02', nombre: 'Sopa del Día', precio: 5, disponibleHoy: false }, // Agotado
  { codigo: 'PLA-05', nombre: 'Tiramisú', precio: 6, disponibleHoy: true }
];

function calcularCuenta(pedidos: Pedido[], menu: PlatoMenu[]){

    return pedidos
        .reduce((total, pedido) => {
            const menuPedido = menu.find(comida => comida.codigo === pedido.codigoPlato)
            if(menuPedido !== undefined && menuPedido.disponibleHoy){
                const cuentaTotal = menuPedido.precio * pedido.cantidad
                return total + cuentaTotal

            }else{
                return total
            }
        }, 0)

}

console.log(calcularCuenta(pedidosMesa4, menuDelDia)); 

