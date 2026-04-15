//Regresamos a tu Tienda de Zapatos. Estás programando el carrito de compras. Cuando el cliente está a punto de pagar, hay una caja de texto que dice "Ingresa tu código de descuento".

//Tu misión: Crear el motor que recibe ese código, busca si existe en la base de datos de promociones, verifica que no esté vencido y, si todo está bien, calcula el nuevo total a pagar.

interface Cupon {
  codigo: string;
  descuentoPorcentaje: number;
  activo: boolean;
}

const cuponesDisponibles: Cupon[] = [
  { codigo: 'VERANO20', descuentoPorcentaje: 20, activo: true },
  { codigo: 'NAVIDAD50', descuentoPorcentaje: 50, activo: false }, // 🚨 Expirado
  { codigo: 'BIENVENIDA10', descuentoPorcentaje: 10, activo: true },
  { codigo: 'ERROR99', descuentoPorcentaje: 99, activo: false }    // 🚨 Expirado
];

function aplicarDescuento(codigoDescuento: string, totalCompra: number ): string {


    const cuponEncontrado = cuponesDisponibles.find(cupon => cupon.codigo === codigoDescuento)
    if(cuponEncontrado === undefined){
        return `❌ Cupón inválido: El código ${codigoDescuento} no existe.`
    } else if (cuponEncontrado.activo === false) {
        return `⚠️ Cupón expirado: El código ${codigoDescuento} ya no es válido.`
    } else {
       const totalDescuento = (totalCompra * cuponEncontrado.descuentoPorcentaje) / 100; 
       const totalCarrito = totalCompra - totalDescuento
       return `✅ ¡Éxito! Cupón aplicado de ${cuponEncontrado.descuentoPorcentaje}%. Tu nuevo total a pagar es de ${totalCarrito}.`
    }


}

console.log(aplicarDescuento('PRIMAVERA', 200));  // Prueba 1: No existe
console.log(aplicarDescuento('NAVIDAD50', 200));  // Prueba 2: Expirado
console.log(aplicarDescuento('VERANO20', 200));   // Prueba 3: Camino Feliz (Debería dar $160)