//En tu aplicación, tienes una lista de empleados. RRHH te pide un reporte muy específico para el cierre de año. Necesitan:

//Una lista de empleados que contenga SOLO los nombres y sus salarios (es decir, no quieren ver los IDs ni el departamento).

//Pero, SOLO deben aparecer los empleados que pertenezcan al departamento de 'Ventas'.

//Y lo más importante: Esa lista debe estar ordenada alfabéticamente de la A a la Z por el nombre del empleado.

interface Empleado {
  id: string;
  nombre: string;
  departamento: 'Ventas' | 'Soporte' | 'Desarrollo';
  salario: number;
}

const nominaCompleta: Empleado[] = [
  { id: 'EMP01', nombre: 'Zack', departamento: 'Ventas', salario: 3000 },
  { id: 'EMP02', nombre: 'Ana', departamento: 'Soporte', salario: 2500 },
  { id: 'EMP03', nombre: 'Carlos', departamento: 'Ventas', salario: 3200 },
  { id: 'EMP04', nombre: 'Diana', departamento: 'Desarrollo', salario: 4000 },
  { id: 'EMP05', nombre: 'Beto', departamento: 'Ventas', salario: 2800 }
];

function listarEmpleados(empleados: Empleado[] ): {nombre: string, salario: number }[] {

    const datosImportantes = empleados.filter(empleado => empleado.nombre && empleado.salario && empleado.departamento === 'Ventas')
    const datosNecesarios = datosImportantes.map(empleados => {
        return {
            nombre: empleados.nombre,
            salario: empleados.salario
        }
    })

    const datosNecesariosClon = [...datosNecesarios]
    const datosOrdenados = datosNecesariosClon.sort((a, b) => a.nombre.localeCompare(b.nombre))
    return datosOrdenados

}
console.log("Lista ordenada alfabéticamente por el nombre del empleado")
console.log(listarEmpleados(nominaCompleta))