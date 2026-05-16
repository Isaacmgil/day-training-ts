//Para este ejercicio vamos a reutilizar tus clases Cliente, Producto y Taquilla exactamente como las dejaste ayer (con su caja registradora en totalRecaudado).

//El cambio viene en los Asientos. El cine va a inaugurar una sala VIP Premium. Estos asientos especiales tienen un precio base más alto, pero además incluyen un beneficio: vienen con un snackCortesia (como unos chocolates o un refresco pequeño) y tienen una propiedad llamada reclinacionMaxima (un número en grados, ej. 150).

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

class AsientoVIP extends Asiento {
    public snackCortesia: Producto; 
    public reclinacionMaxima: number;

    constructor(codigoAsiento: string, precioAsiento: number, snackCortesia: Producto, reclinacionMaxima: number){
        super(codigoAsiento, precioAsiento)
        this.snackCortesia = snackCortesia; 
        this.reclinacionMaxima = reclinacionMaxima; 
    }


}

// 1. Reutiliza tus instancias de ayer (Producto, Clientes, Taquilla, FuncionCine)
const productoNuevo = new Producto('Combo Mega', 15);
const clienteVIP = new Cliente('Isaac', true);
const funcionInception = new FuncionCine('Inception', 0.20);
const taquilla = new Taquilla('CineMoneyPal');

// 2. LA NOVEDAD: Creamos un asiento normal Y un asiento VIP con esteroides
const asientoNormal = new Asiento('A1', 10);
const asientoPremium = new AsientoVIP('VIP-1', 20, new Producto('Chocolates Gigantes', 0), 180);

// 3. Configuramos ambos en la sala (¡La sala acepta ambos porque el VIP sigue siendo un Asiento!)
funcionInception.configurarButaca(asientoNormal);
funcionInception.configurarButaca(asientoPremium);

// 4. Ejecutamos las ventas usando tu "venderComboEspecial" de ayer
taquilla.venderComboEspecial(funcionInception, 'A1', productoNuevo, clienteVIP); // Asiento Normal
taquilla.venderComboEspecial(funcionInception, 'VIP-1', productoNuevo, clienteVIP); // Asiento VIP