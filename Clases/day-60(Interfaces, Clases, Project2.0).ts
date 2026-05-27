//Imagina que estás programando el motor interno de MoneyPal. Te llega un arreglo (array) con las transacciones del día de un usuario, y necesitas calcular cómo quedó su cuenta y cuánto le cobraste en comisiones.

const historialTransacciones = [
    { tipo: "ingreso", monto: 500 },
    { tipo: "retiro", monto: 100, cajeroExterno: true },
    { tipo: "ingreso", monto: 200 },
    { tipo: "retiro", monto: 50, cajeroExterno: false },
    { tipo: "fraude", monto: 1000 }
];

let saldoActual = 0;
let totalComisiones = 0;

historialTransacciones.forEach((transaccion) => {
    if (transaccion.tipo === "ingreso") {
        saldoActual += transaccion.monto;
    } if (transaccion.tipo === 'retiro') {
        saldoActual -= transaccion.monto
        if (transaccion.cajeroExterno) {
            saldoActual -= 15;
            totalComisiones += 15;
        }
    } else {

    }

})

console.log(`Saldo final del usuario: ${saldoActual}`);
console.log(`Comisiones ganadas por la app: ${totalComisiones}`);

/////////////////////////////////////////////////////////////////////////////////

//Vamos a simular el sistema central de una gran cadena de cines para liquidar las ganancias del fin de semana. No hay código de ayuda, solo reglas de negocio.

interface ProyeccionBase {
    readonly id: string;
    titulo: string;
    recaudacionTaquilla: number;
}

interface Proyeccion3D extends ProyeccionBase {
    costoMantenimientoLentes?: number;
}

class SucursalBase {
    public nombre: string;
    protected balance: number;

    constructor(nombre: string, balance: number) {
        this.nombre = nombre;
        this.balance = balance;
    }

    ingresarDinero(monto: number) {
        this.balance += monto;
    }

    get balanceActual() {
        return this.balance;
    }
}

class SucursalVIP extends SucursalBase {
    public retencionLujo: number
    constructor(nombre: string, balance: number, retencionLujo: number) {
        super(nombre, balance)
        this.retencionLujo = retencionLujo;
    }

    ingresarDinero(monto: number,) {
        const retencion = monto * this.retencionLujo;
        const gananciaNeta = monto -= retencion;
        super.ingresarDinero(gananciaNeta);
    }

}

class CorporacionCine {
    private sucursales: SucursalBase[];
    constructor() {
        this.sucursales = [];
    }

    registrarSucursales(sucursales: SucursalBase) {
        this.sucursales.push(sucursales);
    }

    liquidarCartelera(proyeccion: Proyeccion3D) {
        let gananciaNeta = 0;
        gananciaNeta += proyeccion.recaudacionTaquilla;
        if (proyeccion.costoMantenimientoLentes) {
            gananciaNeta -= proyeccion.costoMantenimientoLentes;
        }

        this.sucursales.forEach((sucursal) => {
            if(!(sucursal instanceof SucursalVIP)){
                sucursal.ingresarDinero(gananciaNeta - 50); 
            }else{
                sucursal.ingresarDinero(gananciaNeta);
            }
        });

        return gananciaNeta; 

    }

}

const miCorporacion = new CorporacionCine(); 

const sucursalBase = new SucursalBase('Sambil', 0); 
const sucursalVIP = new SucursalVIP('Tolon', 0, 0.10); 

miCorporacion.registrarSucursales(sucursalBase); 
miCorporacion.registrarSucursales(sucursalVIP); 

const proyeccion3D: Proyeccion3D = {
    id: 'MOV-99', 
    titulo: 'Avengers', 
    recaudacionTaquilla: 500, 
    costoMantenimientoLentes: 100
} 

const gananciaBaseCalculada = miCorporacion.liquidarCartelera(proyeccion3D); 

console.log(`Base a repartir por la película: ${gananciaBaseCalculada}`); 
console.log(`Balance Sambil: ${sucursalBase.balanceActual}`); 
console.log(`Balance Tolón: ${sucursalVIP.balanceActual}`); 



