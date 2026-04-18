//Estás programando el panel del Departamento de Fraude de MoneyPal. Tienen una lista de cuentas que están siendo investigadas por movimientos extraños.

//Tu misión: Crear la función del "Botón Rojo". Un operador ingresará el ID de una cuenta sospechosa. Tu sistema debe buscar en qué posición de la lista está esa cuenta. Si la encuentra, debe cambiar su estado a 'Bloqueada'. Si el operador ingresa un ID que no existe, debe lanzar una alerta.

interface Cuenta {
  id: string;
  usuario: string;
  estado: 'Activa' | 'En Revisión' | 'Bloqueada';
}

const cuentasSospechosas: Cuenta[] = [
  { id: 'C-001', usuario: 'Zack99', estado: 'En Revisión' },
  { id: 'C-002', usuario: 'Hackerman', estado: 'En Revisión' },
  { id: 'C-003', usuario: 'InversorPro', estado: 'Activa' }
];

function prenderAlertas(idCuenta: string): string {

    const idSospechosos = cuentasSospechosas.findIndex(usuario => usuario.id === idCuenta)
    if(idSospechosos === -1){
        return `❌ Error: La cuenta con el id ${idCuenta} no existe en la lista de investigación.`
    }else{
        cuentasSospechosas[idSospechosos]!.estado = 'Bloqueada'
        return `🚨 Éxito: La cuenta de ${cuentasSospechosas[idSospechosos]?.usuario} ha sido BLOQUEADA.`
    }

}

console.log("ALERTA!🚨 Lista de usuarios sospechosos!")
console.log(prenderAlertas('C-002'))
console.log(cuentasSospechosas)