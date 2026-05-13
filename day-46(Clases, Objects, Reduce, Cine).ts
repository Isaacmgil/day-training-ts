//Imagina que nos han contratado para rediseñar el motor interno de reservas de boletos para una cadena importante de cines (piensa en una cartelera del Sambil o el Tolón).

//Necesitamos un sistema donde los asientos sean individuos independientes que se protejan a sí mismos de ser sobrevendidos (doble reserva), y una sala que gestione la venta total.

// 1. EL INDIVIDUO (El asiento físico)
class Asiento {
    public codigoAsiento: string;
    public precioAsiento: number;
    public estaOcupado: boolean;

    constructor(codigoAsiento: string, precioAsiento: number) {

        this.codigoAsiento = codigoAsiento;
        this.precioAsiento = precioAsiento;
        this.estaOcupado = false;
    }

    reservarAsiento() {
        if (this.estaOcupado === true) return
        this.estaOcupado = true;
    }


}

// 2. EL GESTOR (La sala de proyección)
class FuncionCine {
    public pelicula: string;
    private butacas: Asiento[];

    constructor(nombrePelicula: string) {
        this.pelicula = nombrePelicula;
        this.butacas = []
    }

    configurarButaca(butacaLista: Asiento) {
        this.butacas.push(butacaLista)
    }

    venderBoleto(codigoButaca: string) {
        const butacaEncontrada = this.butacas.find(butaca => butaca.codigoAsiento === codigoButaca)
        if (butacaEncontrada) {
            butacaEncontrada.reservarAsiento()
        }

    }

    get asientosLibres() {
        return this.butacas.filter(butaca => butaca.estaOcupado === false)
    }

    get ingresosTotales() {
        const butacasOcupadas = this.butacas.filter(butaca => butaca.estaOcupado)
        return butacasOcupadas.reduce((total, asiento) => total + asiento.precioAsiento, 0)
    }


}

// 1. Fabricamos los asientos (VIP cuestan más)
const asientoA1 = new Asiento('A1', 5);
const asientoA2 = new Asiento('A2', 5);
const asientoVIPA1 = new Asiento('VIPA1', 20);

// 2. Fabricamos la función
const funcionInception = new FuncionCine('Inception');

// 3. El cine configura la sala
funcionInception.configurarButaca(asientoA1);
funcionInception.configurarButaca(asientoA2);
funcionInception.configurarButaca(asientoVIPA1);



// 4. Se abre la taquilla (Operaciones)
funcionInception.venderBoleto('A1');
funcionInception.venderBoleto('VIPA1');
funcionInception.venderBoleto('A1');// Un hacker intenta comprar el A1 de nuevo. El cadenero debe detenerlo.

// 5. Los reportes
console.log('--- Asientos Disponibles ---');
console.log(funcionInception.asientosLibres);

console.log('--- Ingresos Totales ---');
console.log(`$${funcionInception.ingresosTotales}`);