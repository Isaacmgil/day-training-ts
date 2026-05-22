//Ticket de Desarrollo: Sistema de Almacén Automatizado

class ProductoBase {
    public name: string;
    protected stockActual: number;

    constructor(name: string, stockActual: number) {
        this.name = name;
        this.stockActual = stockActual;
    }

    get verStockActual() {
        return this.stockActual
    }

    retirarInventario(cantidad: number) {
        this.stockActual -= cantidad;
        if (this.stockActual < 0) {
            this.stockActual = 0
        }
    }
}

class ProductoPerecedero extends ProductoBase {
    private diasParaCaducar: number;
    constructor(name: string, stockActual: number, diasParaCaducar: number) {
        super(name, stockActual)
        this.diasParaCaducar = diasParaCaducar;
    }

    retirarInventario(cantidad: number) {
        const cantidadDoble = cantidad + 1;
        super.retirarInventario(cantidadDoble)
    }


}

class Almacen {
    private listaProductos: ProductoBase[]

    constructor(){
        this.listaProductos = []
    }

    registrarProductos(producto: ProductoBase){
        this.listaProductos.push(producto)
    }

    ejecutarAuditoriaNocturna(retiroFijo: number = 10){
        this.listaProductos.forEach((producto) => {
            if(!(producto instanceof ProductoPerecedero)){
                producto.retirarInventario(2);
            }else {
                producto.retirarInventario(retiroFijo)
            }
        })
    }

}

//TEST//

const miAlmacen = new Almacen(); 

const productoBase = new ProductoBase('Latas de Atun', 100); 
const productoPerecedero = new ProductoPerecedero('Fresas Frescas', 50, 5); 

miAlmacen.registrarProductos(productoBase); 
miAlmacen.registrarProductos(productoPerecedero); 

miAlmacen.ejecutarAuditoriaNocturna(); 

console.log(`Stock restante Producto Base: ${productoBase.verStockActual}`);
console.log(`Stock restante Producto Perecedero: ${productoPerecedero.verStockActual}`);
