//Misión 1: El Soporte Técnico (Modificación)
//Carolina (ID: 'C-103') acaba de llamar muy molesta porque pagó su ascenso a membresía 'VIP' hace dos días y el sistema no se ha actualizado.

//Tu objetivo: Encuentra la posición exacta de Carolina en la base de datos original y cámbiale su membresía a 'VIP'.

//Misión 2: El Auditor de Riesgos (Booleanos)
//El equipo legal y de contabilidad te pide dos reportes ultra rápidos de "Sí o No" antes de una reunión.

//Tu objetivo A: Crear una constante que responda: ¿Todos los clientes con membresía 'VIP' están verificados?

//Tu objetivo B: Crear una constante que responda: ¿Hay alguno (al menos un) cliente en la base de datos que tenga saldo negativo (menor a 0)?

//Misión 3: El Ranking de Marketing (Organización)
//El equipo de marketing quiere regalar una giftcard al cliente con más dinero, pero no saben quién es. Quieren una lista limpia.

//Tu objetivo: Crea una función que tome a los clientes, y te devuelva una lista ordenada de Mayor a Menor saldo.

//Regla Senior: Marketing NO quiere ver los IDs ni si están verificados. Quieren que la lista final muestre SOLAMENTE el nombre, la membresía y el saldo de cada persona. (Pista: Recuerda qué hacíamos antes y después del .sort para no destruir el array original y cambiar la forma de los datos).

interface Cliente {
  id: string;
  nombre: string;
  membresia: 'Basic' | 'Premium' | 'VIP';
  saldo: number;
  verificado: boolean;
}

const clientesMoneyPal: Cliente[] = [
  { id: 'C-101', nombre: 'Andrea', membresia: 'VIP', saldo: 4500, verificado: true },
  { id: 'C-102', nombre: 'Beto', membresia: 'Basic', saldo: -50, verificado: true },
  { id: 'C-103', nombre: 'Carolina', membresia: 'Premium', saldo: 1200, verificado: false },
  { id: 'C-104', nombre: 'Daniel', membresia: 'VIP', saldo: 8000, verificado: true },
  { id: 'C-105', nombre: 'Elena', membresia: 'Basic', saldo: 15, verificado: false }
];

    console.log('Cambiando a Carolina a su nueva membresía: ')
    const posicionIndex = clientesMoneyPal.findIndex(usuario => usuario.id === 'C-103');
    clientesMoneyPal[posicionIndex]!.membresia = 'VIP';
    console.log(clientesMoneyPal);

    console.log('Todos los usuarios VIP están verificados?: ')
    const todosVerificados = clientesMoneyPal.filter(cliente => cliente.membresia === 'VIP').every(vip => vip.verificado === true); 
    console.log(todosVerificados); 

    console.log('Existen usuarios que tengan alguna deuda actualmente?: ')
    const existenDeudores = clientesMoneyPal.some(cliente => cliente.saldo < 0); 
    console.log(existenDeudores); 

    function ordenarLista(clientes: Cliente[]): {nombre: string, membresia: 'Basic' | 'Premium' | 'VIP', saldo: number  }[] {
        const requerimientosLista = clientes.filter(cliente => cliente.nombre && cliente.membresia && cliente.saldo); 
        const datosRequeridos = requerimientosLista.map(clientes => {
            return {
                nombre: clientes.nombre,
                membresia: clientes.membresia, 
                saldo: clientes.saldo, 
            }
        })


        const datosRequeridosClon = [...datosRequeridos]; 
        const listaOrdenada = datosRequeridosClon.sort((a, b) => b.saldo - a.saldo)
        return listaOrdenada

    }

    console.log("Lista ordenada de mayor a menos por el saldo del cliente: ")
    console.log(ordenarLista(clientesMoneyPal));