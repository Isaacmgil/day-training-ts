//El gerente del cine quiere aumentar las ventas creando paquetes. Un Combo incluye una entrada y un producto de comida.
//El descuento de membresía (20%) debe aplicarse al monto total (Precio Asiento + Precio Comida), pero solo si el cliente es VIP. Si no es VIP, paga el precio completo de ambos.

class Producto {
    public nombreProducto: string; 
    public precioProducto: number; 

    constructor(nombreProducto: string, precioProducto: number){
        this.nombreProducto = nombreProducto;
        this.precioProducto = precioProducto;
    }

}

class Cliente {
    public nombre: string;
    public tieneMembresia: boolean;

    constructor(nombre: string, tieneMembresia: boolean) {
        this.nombre = nombre;
        this.tieneMembresia = tieneMembresia;
    }
}

class Asiento {
    public codigoAsiento: string;
    public precioAsiento: number;
    public asientoOcupado: boolean;

    constructor(codigoAsiento: string, precioAsiento: number) {
        this.codigoAsiento = codigoAsiento;
        this.precioAsiento = precioAsiento;
        this.asientoOcupado = false;
    }

    reservarAsiento() {
        if (this.asientoOcupado === true) return
        this.asientoOcupado = true;
    }
}

class FuncionCine {
    public nombreFuncion: string;
    public butacas: Asiento[];
    public descuentoMembresia: number;

    constructor(nombreFuncion: string, descuentoMembresia: number) {
        this.nombreFuncion = nombreFuncion;
        this.butacas = [];
        this.descuentoMembresia = descuentoMembresia;
    }

    configurarButaca(butacaLista: Asiento) {
        this.butacas.push(butacaLista)
    }

    venderBoletoMejorado(codigoAsiento: string, cliente: Cliente) {
        const asientoEncontrado = this.butacas.find(butaca => butaca.codigoAsiento === codigoAsiento)
        if (asientoEncontrado) {
            asientoEncontrado.reservarAsiento()
            if (cliente.tieneMembresia) {
                const montoDescuento = (asientoEncontrado!.precioAsiento * this.descuentoMembresia)
                asientoEncontrado.precioAsiento -= montoDescuento
            }
        }
    }

    get reporteAsientosDisponibles() {
        return this.butacas
            .filter(butaca => !butaca.asientoOcupado)
            .map(butaca => `Asiento ${butaca.codigoAsiento} - Disponible`)
    }

    get reporteAsientosVendidos() {
        return this.butacas
            .filter(butaca => butaca.asientoOcupado)
            .map(butaca => `Asiento ${butaca.codigoAsiento} - Vendido`)
    }

    get ingresosTotales() {
        const butacasOcupadas = this.butacas.filter(butaca => butaca.asientoOcupado)
        return butacasOcupadas.reduce((total, asiento) => total + asiento.precioAsiento, 0)
    }

}

class Taquilla {
    public nombreCine: string; 
    private cartelera: FuncionCine[]; 
    private margenGananciaPopcorn: number; 
    public totalRecaudado: number = 0;


    constructor(nombreCine: string){
        this.nombreCine = nombreCine; 
        this.cartelera = []; 
        this.margenGananciaPopcorn = 0; 
    }

    venderComboEspecial(funcionPelicula: FuncionCine, codigoAsiento: string, comida: Producto, cliente: Cliente){
        const precioButaca = funcionPelicula.butacas.find(butaca => butaca.codigoAsiento === codigoAsiento);
        precioButaca!.reservarAsiento();
        const totalBruto = precioButaca!.precioAsiento + comida.precioProducto;
        let totalFinal = totalBruto;
        if(cliente.tieneMembresia){
            totalFinal -= (totalBruto * funcionPelicula.descuentoMembresia);
        }
        this.totalRecaudado += totalFinal;
        console.log(`RECIBO: ${cliente.nombre} compró ${funcionPelicula.nombreFuncion} + ${comida.nombreProducto}. Total pagado: $${totalFinal}`)
    }
}

const productoNuevo = new Producto('Combo Mega', 15);
const asientoA1 = new Asiento('A1', 10);
const asientoA2 = new Asiento('A2', 10);
const asientoA3 = new Asiento('A3', 10);
const clienteVIP = new Cliente('Isaac', true); 
const clienteRegular = new Cliente('Veronica', false); 
const funcionInception = new FuncionCine('Inception', 0.20);
const taquilla = new Taquilla('CineMoneypal')

funcionInception.configurarButaca(asientoA1); 
funcionInception.configurarButaca(asientoA2); 
funcionInception.configurarButaca(asientoA3); 

// 1. Ejecutas las ventas (Esto ya imprime los recibos por el console.log interno)
taquilla.venderComboEspecial(funcionInception, 'A1', productoNuevo, clienteVIP);
taquilla.venderComboEspecial(funcionInception, 'A2', productoNuevo, clienteRegular);

console.log('--- ESTADO DE LA SALA ---');
console.log('Disponibles:', funcionInception.reporteAsientosDisponibles);
console.log('Vendidos:', funcionInception.reporteAsientosVendidos);
console.log('Ingresos Totales:', taquilla.totalRecaudado);
