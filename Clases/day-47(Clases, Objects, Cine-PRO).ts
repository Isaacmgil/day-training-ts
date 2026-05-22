//Hoy vamos a subir el nivel de "interacción entre clases". En la vida real, los sistemas no solo tienen "Cosas" (Asientos) y "Salas", sino también "Usuarios" con reglas especiales.

//Vamos a crear un Sistema de Membresías. Queremos que el Cine pueda recibir a un Cliente y, dependiendo de si ese cliente tiene una membresía activa, se le aplique un descuento automáticamente al comprar su boleto.

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

const asientoA1 = new Asiento('A1', 10);
const asientoA2 = new Asiento('A2', 10);
const asientoA3 = new Asiento('A3', 10);


const clienteVIP = new Cliente('Isaac', true);
const clienteRegular = new Cliente('Veronica', false);

const funcionInterstellar = new FuncionCine('Interstellar', 0.20);

funcionInterstellar.configurarButaca(asientoA1)
funcionInterstellar.configurarButaca(asientoA2)
funcionInterstellar.configurarButaca(asientoA3)


funcionInterstellar.venderBoletoMejorado('A1', clienteVIP);
funcionInterstellar.venderBoletoMejorado('A2', clienteRegular);

console.log(funcionInterstellar.reporteAsientosDisponibles);
console.log(funcionInterstellar.reporteAsientosVendidos);
console.log(funcionInterstellar.ingresosTotales);









