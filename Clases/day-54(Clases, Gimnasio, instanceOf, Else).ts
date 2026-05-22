//Vamos a diseñar el Sistema de Gestión de un Centro de Alto Rendimiento.

class AtletaBase {
    public nombre: string;
    protected energiaActual: number;

    constructor(nombre: string, energiaActual: number) {
        this.nombre = nombre;
        this.energiaActual = energiaActual;
    }

    get consultarEnergia() {
        return this.energiaActual;
    }

    desgastarEnergia(impactoEnergia: number) {
        if (impactoEnergia > 0) {
            this.energiaActual -= impactoEnergia;
        }
        if (this.energiaActual < 0) {
            this.energiaActual = 0
        }
    }

}

class AtletaHipertrofia extends AtletaBase {
    public volumenEntrenamiento: number;

    constructor(nombre: string, energiaActual: number, volumenEntrenamiento: number) {
        super(nombre, energiaActual)
        this.volumenEntrenamiento = volumenEntrenamiento;
    }

    desgastarEnergia(impactoEnergia: number) {
        const consumoEnergiaExtra = this.volumenEntrenamiento * 0.20;
        const fatigaTotal = impactoEnergia + consumoEnergiaExtra;
        super.desgastarEnergia(fatigaTotal);
    }
}

class Gym {
    private listaAtletas: AtletaBase[]

    constructor() {
        this.listaAtletas = []
    }

    inscribirAtletas(atleta: AtletaBase) {
        this.listaAtletas.push(atleta)
    }

    diaPiernaPesado(gastoFijoEnergia: number = 30) {
        this.listaAtletas.forEach((atleta) => {
            if (!(atleta instanceof AtletaHipertrofia)) {
                atleta.desgastarEnergia(gastoFijoEnergia + 20)
            } else {
                atleta.desgastarEnergia(gastoFijoEnergia)
            }
        })
    }
}

///TEST///

const miGimnasio = new Gym()

const atletaBase = new AtletaBase('Isaac', 100); 
const atletaHipertrofia = new AtletaHipertrofia('Veronica', 100, 50);

miGimnasio.inscribirAtletas(atletaBase); 
miGimnasio.inscribirAtletas(atletaHipertrofia); 

miGimnasio.diaPiernaPesado()

console.log(`Energía restante de Atleta Base: ${atletaBase.consultarEnergia}`);
console.log(`Energía restante de Atleta Hipertrofia: ${atletaHipertrofia.consultarEnergia}`);
