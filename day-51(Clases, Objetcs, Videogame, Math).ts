//Para este laboratorio, vamos a diseñar un Sistema de Arena de Combate (un simulador de videojuegos RPG básico). Los videojuegos son el ecosistema perfecto para entender esto, porque los personajes comparten estados pero reaccionan diferente a las reglas del entorno.

class CombatienteBase {
    public nombre: string;
    public idCombatiente: string;
    protected salud: number;

    constructor(nombre: string, idCombatiente: string, salud: number) {
        this.nombre = nombre;
        this.idCombatiente = idCombatiente;
        this.salud = salud;
    }

    get saludActual() {
        return this.salud;
    }

    recibirDaño(impacto: number) {
        this.salud -= impacto
        if (this.salud <= 0) {
            this.salud = 0
        }
    }
}

class GuerreroAcorazado extends CombatienteBase {
    public puntosArmadura: number;

    constructor(nombre: string, idCombatiente: string, salud: number, puntosArmadura: number) {
        super(nombre, idCombatiente, salud)
        this.puntosArmadura = puntosArmadura;
    }

    recibirDaño(impacto: number) {
        this.puntosArmadura -= impacto;

        if (this.puntosArmadura < 0) {
            // El daño restante lo volvemos un número positivo
            const dañoExcedente = Math.abs(this.puntosArmadura);

            // Resetamos la armadura
            this.puntosArmadura = 0;

            // ¡Le mandamos el daño al padre! Él ya sabe restar y asegurar que no sea menor a 0
            super.recibirDaño(dañoExcedente);
        }
    }

}

class Arena {
    private listaGuerrero: CombatienteBase[];

    constructor() {
        this.listaGuerrero = []
    }

    registrarGuerrero(guerrero: CombatienteBase) {
        this.listaGuerrero.push(guerrero)
    }

    fuegoCruzado(impactoFijo: number) {
        this.listaGuerrero.forEach((guerrero) => {
            if (!(guerrero instanceof GuerreroAcorazado)) {
                guerrero.recibirDaño(impactoFijo);
            }
        })
    }
}

const miArena = new Arena;

const guerreroComun = new CombatienteBase('Isaac', 'ARCHER-1', 50);
const guerreroAcorazado = new GuerreroAcorazado('Veronica', 'TANK-1', 80, 30);

miArena.registrarGuerrero(guerreroComun);
miArena.registrarGuerrero(guerreroAcorazado);

guerreroAcorazado.recibirDaño(40);
miArena.fuegoCruzado(20);

console.log(`Salud Restante del Guerrero Comun: ${guerreroComun.saludActual}`);
console.log(`Salud Restante del Guerrero Acorazado: ${guerreroAcorazado.saludActual}`);



