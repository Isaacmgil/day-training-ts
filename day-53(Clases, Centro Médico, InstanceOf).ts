//Para hoy, nos mudamos a un entorno de Gestión Hospitalaria y Emergencias. Este ecosistema nos va a obligar a combinar la inmunidad (el if de ayer), el comportamiento diferenciado (el else) y una nueva regla: La alteración de estados internos a través de un tercero.

class PacienteBase {
    public name: string;
    protected estadoSalud: number;

    constructor(name: string, estadoSalud: number) {
        this.name = name;
        this.estadoSalud = estadoSalud;
    }

    get nivelEstabilidad() {
        return this.estadoSalud;
    }

    alterarEstabilidad(impacto: number) {
        // 1. Aplicas el impacto sin preguntar (la matemática se encarga del signo)
        this.estadoSalud += impacto;

        // 2. Ahora sí, pones los frenos de emergencia por si se pasó de los límites:
        if (this.estadoSalud > 100) {
            this.estadoSalud = 100;
        }
        if (this.estadoSalud < 0) {
            this.estadoSalud = 0;
        }
    }
}

class PacienteCuidadosIntensivos extends PacienteBase {
    public estadoRiesgo: number;

    constructor(name: string, estadoSalud: number, estadoRiesgo: number) {
        super(name, estadoSalud)
        this.estadoRiesgo = estadoRiesgo;
    }

    alterarEstabilidad(impacto: number) {
        if (impacto < 0) {
            const dañoAcumulado = this.estadoRiesgo * impacto;
            super.alterarEstabilidad(dañoAcumulado)
        }else {
            super.alterarEstabilidad(impacto)
        }
    }

}

class MonitoreoClinico {
    private listaPaciente: PacienteBase[];

    constructor() {
        this.listaPaciente = []
    }

    ingresarPaciente(paciente: PacienteBase) {
        this.listaPaciente.push(paciente)
    }

    protocoloContagio(impactoFijoContagio: number = -15) {
        this.listaPaciente.forEach((paciente) => {
            if (!(paciente instanceof PacienteCuidadosIntensivos)) {
                paciente.alterarEstabilidad(impactoFijoContagio)
            }
        });
    }
}

///TEST///

const instanciaMedica = new MonitoreoClinico();

const pacienteComun = new PacienteBase('Isaac', 80);
const pacienteCuidadosIntensivos = new PacienteCuidadosIntensivos('Rosber', 90, 2);

instanciaMedica.ingresarPaciente(pacienteComun);
instanciaMedica.ingresarPaciente(pacienteCuidadosIntensivos);

pacienteCuidadosIntensivos.alterarEstabilidad(-15);

instanciaMedica.protocoloContagio();

console.log(`Estabilidad Paciente Comun: ${pacienteComun.nivelEstabilidad}`);
console.log(`Estabilidad Paciente Cuidados Intensivos: ${pacienteCuidadosIntensivos.nivelEstabilidad}`); 
