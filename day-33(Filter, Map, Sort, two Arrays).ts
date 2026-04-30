//Llegó fin de año en MoneyPal y el departamento de RRHH necesita calcular los bonos de desempeño de los empleados.

//El sistema de RRHH nos da la lista del personal activo, y el sistema de los mánagers nos da las evaluaciones de desempeño (del 1 al 5) y el salario base de cada persona.

interface Empleado {
  id: string;
  nombre: string;
  departamento: string;
}

interface Evaluacion {
  idEmpleado: string;
  puntuacion: number; // Escala del 1 al 5
  salarioBase: number;
}

const nominaActiva: Empleado[] = [
  { id: 'EMP-01', nombre: 'Sofía Vergara', departamento: 'Ventas' },
  { id: 'EMP-02', nombre: 'Pedro Pascal', departamento: 'Tecnología' },
  { id: 'EMP-03', nombre: 'Oscar Isaac', departamento: 'Diseño' },
  { id: 'EMP-04', nombre: 'Anya Taylor', departamento: 'Marketing' }
];

const resultadosEvaluacion: Evaluacion[] = [
  { idEmpleado: 'EMP-03', puntuacion: 5, salarioBase: 4000 },
  { idEmpleado: 'EMP-01', puntuacion: 3, salarioBase: 3500 }, // Puntuación regular
  { idEmpleado: 'EMP-04', puntuacion: 4, salarioBase: 3800 },
  { idEmpleado: 'EMP-02', puntuacion: 5, salarioBase: 4200 }
];

function calcularBonos(empleados: Empleado[], evaluaciones: Evaluacion[]): {nombre: string, puntuacion: number, bonoGanado: number}[]  {

    return evaluaciones 
        .filter(evaluacion => {
            const empleadoEjemplar = empleados.find(empleado => empleado.id === evaluacion.idEmpleado)
            return empleadoEjemplar !== undefined && evaluacion.puntuacion >= 4
        })
        .map(evaluacion => {
            const empleadoConBonos = empleados.find(empleado => empleado.id === evaluacion.idEmpleado)
            return  {
                nombre: empleadoConBonos!.nombre, 
                puntuacion: evaluacion.puntuacion, 
                bonoGanado: evaluacion.salarioBase * 0.10
            }
        })
        .sort((a, b) => b.bonoGanado - a.bonoGanado)

}

console.log(calcularBonos(nominaActiva, resultadosEvaluacion)); 