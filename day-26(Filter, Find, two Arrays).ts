//MoneyPal tiene una función tipo "WhatsApp" donde puedes ver a cuáles de tus contactos del celular les puedes enviar dinero.
//El Frontend tiene acceso a la agenda del teléfono del usuario (lista 1), y el Backend nos acaba de enviar la lista de usuarios registrados en MoneyPal (lista 2).

//Tu trabajo es cruzar ambas listas para mostrar en la pantalla solo a los amigos que pueden recibir transferencias.

interface ContactoLocal {
  id: string;
  nombreGuardado: string;
  telefono: string;
}

interface UsuarioMoneyPal {
  telefono: string;
  alias: string;
  cuentaBloqueada: boolean;
}

const agendaCelular: ContactoLocal[] = [
  { id: 'C1', nombreGuardado: 'Mi Amor', telefono: '+1-555-0001' },
  { id: 'C2', nombreGuardado: 'Papá', telefono: '+1-555-0002' },
  { id: 'C3', nombreGuardado: 'Felipe Gym', telefono: '+1-555-0003' },
  { id: 'C4', nombreGuardado: 'Dueño Depa', telefono: '+1-555-0004' },
  { id: 'C5', nombreGuardado: 'Carlos Trabajo', telefono: '+1-555-0009' }
];

const baseDatosMoneyPal: UsuarioMoneyPal[] = [
  { telefono: '+1-555-0003', alias: 'felipe_fit', cuentaBloqueada: false },
  { telefono: '+1-555-0001', alias: 'princess99', cuentaBloqueada: true }, // ¡Bloqueada!
  { telefono: '+1-555-0005', alias: 'random_user', cuentaBloqueada: false },
  { telefono: '+1-555-0009', alias: 'charlie_dev', cuentaBloqueada: false }
];

function filtrarContactos(agendaTelefono: ContactoLocal[], usuariosMoneypal: UsuarioMoneyPal[]){

return agendaTelefono
  .filter(contacto => {
      const usuarioEncontrado = usuariosMoneypal.find(usuario => usuario.telefono === contacto.telefono)
      if(usuarioEncontrado && usuarioEncontrado.cuentaBloqueada === false){
        return true
      }else{
        return false
      }
      
  })
  .map(contacto => {
    return {
        contacto: contacto.nombreGuardado, 
        estado: 'Disponible'

    }
   })

}

console.log(filtrarContactos(agendaCelular, baseDatosMoneyPal))