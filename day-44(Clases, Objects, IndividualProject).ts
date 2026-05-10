//Para llevar un control profesional de los rediseños que realizas (como el de la librería Booksflea), necesitamos un sistema que no permita errores humanos en el cobro. No podemos permitir que se registren horas en proyectos ya cerrados ni que se ingresen valores ilógicos.

type EstadoProyecto = 'En Progreso' | 'Terminado';

class ProyectoFreelance {
    public nombreProyecto: string;
    private tarifaPorHora: number;
    private horasAcumuladas: number;
    public estado: 'En Progreso' | 'Terminado'

    constructor(nombreProyecto: string, cobroHoras: number) {
        this.nombreProyecto = nombreProyecto;
        this.tarifaPorHora = cobroHoras;
        this.horasAcumuladas = 0;
        this.estado = 'En Progreso'
    }


    añadirJornada(horas: number) {
        if (this.estado === 'Terminado') return;
        if (horas <= 0) return;
        this.horasAcumuladas += horas;
    }

    cerrarContrato(nombreProyecto: string) {
        const proyectoEncontrado = this.nombreProyecto === nombreProyecto
        if (proyectoEncontrado) {
            this.estado = 'Terminado'
        }
    }

    get montoAFacturar() {
        return this.horasAcumuladas * this.tarifaPorHora
    }

}

const miProyectoNuevo = new ProyectoFreelance('Rediseño Booksflea', 30)
miProyectoNuevo.añadirJornada(12);
miProyectoNuevo.añadirJornada(-5);

miProyectoNuevo.cerrarContrato('Rediseño Booksflea');

miProyectoNuevo.añadirJornada(8);
console.log(miProyectoNuevo.montoAFacturar);

