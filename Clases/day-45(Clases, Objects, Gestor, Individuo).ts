//Necesitamos un motor de código para una app de fitness que registre los ejercicios del día (ej. Pecho, Espalda, Brazos). El sistema debe proteger los récords de peso para que no se modifiquen por accidente una vez que la serie está terminada.

// 1. EL INDIVIDUO (Se controla a sí mismo)
class Ejercicio {
    public nombreEjercicio: string;
    public pesoActual: number;
    public serieTerminada: boolean;

    constructor(nombreEjercicio: string, pesoActual: number) {
        this.nombreEjercicio = nombreEjercicio;
        this.pesoActual = pesoActual;
        this.serieTerminada = false;
    }


    subirPeso(kilos: number) {
        if (this.serieTerminada) return;
        if (kilos <= 0) return;
        this.pesoActual += kilos;
    }


    marcarComoTerminado() {
        this.serieTerminada = true; 
    }

}

// 2. EL GESTOR (Controla la lista de individuos)
class DiaDeEntrenamiento {
    public grupoMuscular: string; 
    private rutina: Ejercicio[]

    constructor(grupoMuscular: string){
        this.grupoMuscular = grupoMuscular; 
        this.rutina = []
    }

    agregarEjercicio(nuevoEjercicio: Ejercicio){
        this.rutina.push(nuevoEjercicio)
    }

    finalizarEjercicioEspecífico(ejercicioExistente: string){
        const ejercicioEncontrado = this.rutina.find(rutina => rutina.nombreEjercicio === ejercicioExistente)
        if(ejercicioEncontrado){
            ejercicioEncontrado.marcarComoTerminado()
        }
    }

    get ejerciciosListos(){
       return this.rutina.filter(rutina => rutina.serieTerminada === true)
    }


}

// 1. Creas a tus individuos
const curlBiceps = new Ejercicio('Curl de Bíceps', 12);
const pressFrances = new Ejercicio('Press Francés', 15);

// 2. Creas a tu gestor
const diaBrazos = new DiaDeEntrenamiento('Brazos');

// 3. El gestor contrata a los individuos
diaBrazos.agregarEjercicio(curlBiceps);
diaBrazos.agregarEjercicio(pressFrances);

// 4. Operaciones
curlBiceps.subirPeso(2); // Debería subir a 14kg
curlBiceps.subirPeso(-5); // El cadenero debería bloquear esto

// 5. El gestor da la orden de finalizar
diaBrazos.finalizarEjercicioEspecífico('Curl de Bíceps');

// 6. Imprimes el reporte del gestor
console.log(diaBrazos.ejerciciosListos);