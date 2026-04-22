// /El equipo de Marketing de MoneyPal acaba de comprar una lista de correos para enviar invitaciones, pero cometieron un error y mezclaron gente nueva con clientes que ya están registrados en nuestra plataforma. Si le enviamos un correo de "¡Únete hoy!" a alguien que ya es cliente VIP, nos vamos a ver muy mal.

interface Usuario {
  id: string;
  email: string;
  nombre: string;
}

const usuariosRegistrados: Usuario[] = [
  { id: 'U-01', email: 'isaac@moneypal.com', nombre: 'Isaac' },
  { id: 'U-02', email: 'ana@gmail.com', nombre: 'Ana' },
  { id: 'U-03', email: 'beto@hotmail.com', nombre: 'Beto' }
];

const nuevosImportados: Usuario[] = [
  { id: 'U-04', email: 'carlos@yahoo.com', nombre: 'Carlos' },
  { id: 'U-05', email: 'isaac@moneypal.com', nombre: 'Isaac M.' }, // ¡CUIDADO! Ya existe
  { id: 'U-06', email: 'diana@empresa.com', nombre: 'Diana' },
  { id: 'U-07', email: 'ana@gmail.com', nombre: 'Ana Gomez' } // ¡CUIDADO! Ya existe
];

function filtrarNuevosUsuarios(usuariosViejos: Usuario[], usuariosNuevos: Usuario[]){ 

    const usuariosAprobados = usuariosNuevos.filter(nuevo => {
    const yaExiste = usuariosViejos.some(viejo => viejo.email === nuevo.email);
    return !yaExiste; 
})

    const mensajeEmails = usuariosAprobados.map(usuariosAprobado => `${usuariosAprobado.email}`)
    return mensajeEmails
    

}

console.log(filtrarNuevosUsuarios(usuariosRegistrados, nuevosImportados))