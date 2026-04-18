//Imagina que estás programando el panel de Soporte Técnico de MoneyPal. Un cliente llama furioso diciendo que tiene un problema con su cuenta. El operador de soporte teclea el ID del usuario en el sistema para ver sus datos.

//Tu misión: Crear el motor de búsqueda que recibe ese ID, busca al usuario en la base de datos y devuelve un reporte. Si el usuario no existe, debe devolver un mensaje de error para que el operador lo sepa.

interface Usuario {
  id: string;
  nombre: string;
  plan: 'Gratis' | 'Premium' | 'VIP';
  saldo: number;
}

const baseDeDatos: Usuario[] = [
  { id: 'U-001', nombre: 'Carlos', plan: 'Gratis', saldo: 15 },
  { id: 'U-002', nombre: 'Ana', plan: 'VIP', saldo: 1200 },
  { id: 'U-003', nombre: 'Pedro', plan: 'Premium', saldo: 50 },
  { id: 'U-004', nombre: 'Laura', plan: 'Gratis', saldo: 0 },
  { id: 'U-005', nombre: 'Sofia', plan: 'VIP', saldo: 450 }
];

function buscarUsuario(idBuscado: string): string { 

  const usuarioEncontrado = baseDeDatos.find(usuario => usuario.id === idBuscado)
  if(usuarioEncontrado === undefined) {
    return `❌ Error: El usuario con ID ${idBuscado} no existe en el sistema.`
  } else {
    return `✅ Usuario encontrado: ${usuarioEncontrado.nombre}. Plan: ${usuarioEncontrado.plan}. Saldo actual: ${usuarioEncontrado.saldo}.`
  }

}

// Prueba 1: Un usuario que SÍ existe
console.log(buscarUsuario('U-003')); 
// Prueba 2: Un usuario que NO existe
console.log(buscarUsuario('U-999'));