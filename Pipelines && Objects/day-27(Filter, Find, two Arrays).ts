//Estamos en el E-commerce de MoneyPal. Los usuarios tienen artículos en su carrito de compras y algunos han intentado aplicar códigos de descuento promocionales.

//Tu trabajo es procesar el carrito antes de que el usuario pague: necesitas verificar si el código que ingresaron realmente existe en nuestra base de datos de marketing y, lo más importante, si aún está activo. Si el cupón es válido, le calculas el precio final. Si no es válido, o no tiene cupón, lo ignoramos para este reporte.

interface ArticuloCarrito {
  id: string;
  nombre: string;
  precioOriginal: number;
  codigoCupon?: string; // El signo de interrogación significa que algunos no traen cupón
}

interface CuponDescuento {
  codigo: string;
  porcentaje: number;
  activo: boolean;
}

const carritoCompras: ArticuloCarrito[] = [
  { id: 'P1', nombre: 'Teclado Mecánico', precioOriginal: 120, codigoCupon: 'GAMER20' },
  { id: 'P2', nombre: 'Mouse Óptico', precioOriginal: 40 }, // No ingresó cupón
  { id: 'P3', nombre: 'Monitor 27"', precioOriginal: 300, codigoCupon: 'PROMO50' }, // Cupón inventado, no existe
  { id: 'P4', nombre: 'Silla Ergonómica', precioOriginal: 250, codigoCupon: 'VENCIDO10' }, // Existe, pero está inactivo
  { id: 'P5', nombre: 'Auriculares', precioOriginal: 80, codigoCupon: 'GAMER20' }
];

const baseCupones: CuponDescuento[] = [
  { codigo: 'GAMER20', porcentaje: 20, activo: true },
  { codigo: 'VENCIDO10', porcentaje: 10, activo: false },
  { codigo: 'NAVIDAD30', porcentaje: 30, activo: true }
];

function procesarCarrito(carrito: ArticuloCarrito[], cupones: CuponDescuento[]){

    return carrito 
        .filter(articulo => {
            const cuponExiste = cupones.find(cupon => cupon.codigo === articulo.codigoCupon)
            return cuponExiste !== undefined && cuponExiste.activo 
            
        })
        .map(articulo => {
            const mismoCupon = cupones.find(cupon => cupon.codigo === articulo.codigoCupon)
            const descuento = (articulo.precioOriginal * mismoCupon!.porcentaje / 100)
            return {
                articulo: articulo.nombre, 
                descuentoAplicado: mismoCupon!.porcentaje,
                precioFinal: articulo.precioOriginal - descuento

            }
        })
        
}

console.log(procesarCarrito(carritoCompras, baseCupones)); 