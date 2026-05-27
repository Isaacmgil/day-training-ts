//Diseñaremos el Sistema de Gestión de un Gremio de Aventureros (RPG). Tendrás que deducir la arquitectura basándote puramente en estas reglas de negocio.

interface MisionBase {
    readonly id: string;
    nombre: string;
    recompensa: number;
}

interface MisionEpica extends MisionBase {
    bonoExtra?: number;
}

class HeroeComun {
    public nombre: string;
    protected oroTotal: number;

    constructor(nombre: string, oroTotal: number) {
        this.nombre = nombre;
        this.oroTotal = oroTotal;
    }

    get oro() {
        return this.oroTotal;
    }

    recibirOro(monto: number) {
        this.oroTotal += monto;
    }

}

class CazaRecompensas extends HeroeComun {
    public impuestoGremial: number;

    constructor(nombre: string, oroTotal: number, impuestoGremial: number) {
        super(nombre, oroTotal)
        this.impuestoGremial = impuestoGremial;
    }

    recibirOro(monto: number) {
        const impuesto = monto * this.impuestoGremial;
        const gananciaNeta = monto - impuesto;
        super.recibirOro(gananciaNeta)
    }

}

class Gremio {
    private listaPersonajes: HeroeComun[]

    constructor() {
        this.listaPersonajes = []
    }

    agregarPersonajes(personaje: HeroeComun) {
        this.listaPersonajes.push(personaje);
    }

    completarMision(mision: MisionEpica) {
        let botinTotal = 0;
        botinTotal += mision.recompensa;
        if (mision.bonoExtra) {
            botinTotal += mision.bonoExtra
        }
        this.listaPersonajes.forEach((personaje) => {
            if (!(personaje instanceof CazaRecompensas)) {
                const botinCompleto = botinTotal - 15
                personaje.recibirOro(botinCompleto)
            } else {
                personaje.recibirOro(botinTotal)
            }
        })

        return botinTotal;
    }

}

const miGremio = new Gremio();

const arthur = new HeroeComun('Arthur', 0);
const boba = new CazaRecompensas('Boba', 0, 0.20);

miGremio.agregarPersonajes(arthur);
miGremio.agregarPersonajes(boba);

const misionEpica: MisionEpica = {
    id: 'DRG-01',
    nombre: 'Caza de Dragón',
    recompensa: 200,
    bonoExtra: 50
}

miGremio.completarMision(misionEpica);
console.log(`Oro de Arthur: ${arthur.oro}`);
console.log(`Oro de Boba: ${boba.oro}`); 