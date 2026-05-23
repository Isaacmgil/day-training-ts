/* Hoy damos un salto cuántico en TypeScript. Vamos a dejar de usar las interfaces solo para obligar a las clases a trabajar, y vamos a usarlas para su propósito más popular en el mundo real: Darle forma a los datos puros.

Cuando trabajes con bases de datos o recibas información de internet (como un archivo JSON), no vas a recibir "clases" con métodos, vas a recibir objetos planos (Data Shapes). Si no los controlas, tu sistema puede estallar.*/

interface Empleado {

    readonly id: string; 
    nombre: string; 
    salarioBase: number; 
    bonoProductividad?: number; 
}

class SistemaNomina {
    private empleadosActivos: Empleado[]; 
    constructor(){
        this.empleadosActivos = []
    }

    contratar(nuevoEmpleado: Empleado){
        this.empleadosActivos.push(nuevoEmpleado)
    }

    calcularNominaTotal(){
        let totalGeneral = 0; 
        this.empleadosActivos.forEach((empleado) => {
            totalGeneral += empleado.salarioBase
            if(empleado.bonoProductividad){
                totalGeneral += empleado.bonoProductividad
            }
        })
        return totalGeneral
    }
}

//TEST//

// 1. Instancias el sistema
const miEmpresa = new SistemaNomina();

// 2. Creas a los empleados como objetos planos, ¡pero forzando el contrato!
const empleado1: Empleado = {
    id: "EMP-001",
    nombre: "Isaac",
    salarioBase: 1000,
    bonoProductividad: 200 // Este sí tiene bono
};

const empleado2: Empleado = {
    id: "EMP-002",
    nombre: "Dennis",
    salarioBase: 1200
    // Mira cómo no le pongo bono y TypeScript no me regaña porque es opcional (?)
};

// 3. Intenta hacer trampa para probar tu seguridad
// Descomenta la siguiente línea en tu código e intenta cambiarle el ID a Isaac. 
// TypeScript debería gritarte un error en rojo inmediatamente porque el ID es readonly.
// empleado1.id = "HACKER-999"; 

// 4. Regístralos y calcula
miEmpresa.contratar(empleado1);
miEmpresa.contratar(empleado2);

miEmpresa.calcularNominaTotal();
console.log(`Total a pagar en nómina este mes: ${miEmpresa.calcularNominaTotal()}`); // Debería mostrar 2200, sumando el bono de Isaac y el salario de ambos.
